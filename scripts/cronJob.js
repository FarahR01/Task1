const cron = require('node-cron');
const articleService = require('../services/articleService');

cron.schedule('* * * * *', async () => {
  console.log('Vérification des nouveaux articles WordPress...');
  const latestArticles = await articleService.fetchLatestArticles();
  await articleService.saveNewArticles(latestArticles);
  console.log('Vérification terminée.');
});
