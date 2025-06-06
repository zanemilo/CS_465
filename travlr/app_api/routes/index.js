const express = require('express');
const router = express.Router();

// Import the trips controllers to route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router.route('/trips').get(tripsController.tripsList)

// GET: /trips/:tripCode - lists a single trip
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;
