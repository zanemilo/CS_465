const mongoose = require('mongoose');
const User = require('../models/user');

const register = async (req, res) => {
  // Validate message to ensure that all parameters are present
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ "message": "All fields required" });
  }

  const user = new User({
    name: req.body.name,        // Set User name
    email: req.body.email,      // Set e-mail address
    password: ''                // Start with empty password
  });

  user.setPassword(req.body.password); // Set user password

  const q = await user.save();

  if (!q) {
    // Database returned no data
    return res
      .status(400)
      .json(err);
  } else {
    // Return new user token
    const token = user.generateJWT();
    return res
      .status(200)
      .json(token);
  }
};

module.exports = {
  register
};
