const express = require('express');
const ExpediaController = require('../controllers/ExpediaController');

const router = express.Router();

router.get('/', ExpediaController.getAllOfCurrentUser);
router.post('/:location/:arrival/:dateto', ExpediaController.create);

module.exports = router;
