/**
 * GET /api/comments/
 * Responds with a JSON object containing an empty array of comments.
 *
 * @route GET /api/comments/
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Object} JSON response with an empty comments arrayG
 */
const express = require('express');
const router = express.Router();

//# sourceMappingURL=comments.js.map    
router.get('/', function(res) {
  res.json({comments: []});
});
