const express = require('express');
const TripController = require('../controllers/TripController');

const router = express.Router();

router.get('/', TripController.getAllOfCurrentUser);
router.post('/', TripController.create);
router.delete('/:id', TripController.delete);

module.exports = router;
