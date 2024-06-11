const articleService = require('../services/articleService');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const fetchAndSaveArticles = catchAsyncErrors(async (req, res) => {
  // Use the usePageParam condition to decide the query parameters
  const articles = await articleService.fetchLatestArticles(true);
  await articleService.saveNewArticles(articles);
  res.status(200).send('Articles saved successfully');
});

const testFetchAndSave = catchAsyncErrors(async (req, res) => {
  // Use the usePageParam condition to decide the query parameters
  const articles = await articleService.fetchLatestArticles(false);
  await articleService.saveNewArticles(articles);
  res.status(200).send('Manual fetch and save executed successfully');
});

module.exports = { fetchAndSaveArticles, testFetchAndSave };
