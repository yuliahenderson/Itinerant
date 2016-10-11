const express = require('express');
const ExpediaController = require('../controllers/ExpediaController');

const router = express.Router();

router.post('/:location/:arrival/:date', ExpediaController.create);

module.exports = router;
