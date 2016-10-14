const express = require('express');
const ExpediaController = require('../controllers/ExpediaController');

const router = express.Router();

router.get('/flights', ExpediaController.getAllOfCurrentUser);
router.post('/flights/:location/:arrival/:dateTo', ExpediaController.create);

module.exports = router;
