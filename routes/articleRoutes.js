const express = require('express');
const articlesController = require('../controllers/articlesController');
const router = express.Router();

/**
 * @swagger
 * /articles/fetch-and-save:
 *   get:
 *     summary: Fetch and save articles
 *     description: Fetch the latest articles from WordPress and save them in the database.
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
router.get('/fetch-and-save', articlesController.fetchAndSaveArticles);

// New route for manual testing
router.get('/test-fetch-and-save', articlesController.testFetchAndSave);

module.exports = router;
