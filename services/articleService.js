const axios = require('axios');
const Article = require('../models/articleModel'); // Ensure this import is present

const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com/posts';

async function fetchLatestArticles(usePageParam = true) {
  try {
    const response = await axios.get(endpoint, {
      params: {
        per_page: 10,  // Number of articles to fetch per request
        _embed: true,
        ...(usePageParam ? { page: 1 } : {})  // Conditionally add the page parameter
      }
    });

    const posts = response.data;
    console.log('Fetched posts:', posts);
    return posts;
  } catch (error) {
    console.error('Error fetching articles from WordPress:', error);
    throw new Error(`Error fetching articles from WordPress: ${error.message}`);
  }
}

async function saveNewArticles(articles) {
  for (const article of articles) {
    const existingArticle = await Article.findOne({ where: { slug: article.slug } });
    if (!existingArticle) {
      await Article.create({
        name: article.title.rendered,
        type: article.type,
        author: article.author,
        format: article.format,
        slug: article.slug,  // Ensure slug is in the database schema
      });
    }
  }
}

module.exports = { fetchLatestArticles, saveNewArticles };
