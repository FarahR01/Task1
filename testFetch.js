const axios = require('axios');

const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com/posts';

// Function to fetch the latest articles
async function fetchLatestArticles() {
  try {
    const response = await axios.get(endpoint, {
      params: {
        per_page: 1,
        page: 1,
        _embed: true,
      }
    });
    console.log('Fetched posts:', response.data);  // Log the fetched posts for debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching articles from WordPress:', error.response ? error.response.data : error.message);
    throw new Error(`Error fetching articles from WordPress: ${error.message}`);
  }
}

fetchLatestArticles();
