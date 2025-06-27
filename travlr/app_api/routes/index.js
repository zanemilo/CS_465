const express = require("express");
const router = express.Router();

// Import controllers
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// Define routes for authentication
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

// Define route for /trips endpoint
router
  .route("/trips")
  .get(tripsController.tripsList) // GET Method routes tripList
  .post(authenticateJWT, tripsController.tripsAddTrip); // POST Method to add a trip (protected)

// define route for login endpoint
router
  .route("/login")
  .post(authController.login); // POST Method to login user

// GET: /trips/:tripCode - lists a single trip
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode) // GET single trip by code
  .put(authenticateJWT, tripsController.tripsUpdateTrip); // PUT to update trip (protected)

module.exports = router;
