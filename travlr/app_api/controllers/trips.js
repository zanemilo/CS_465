const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - list all trips
// Regardless of outcome, response must include HTML status code
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) //No filter returns all trips
        .exec();

    //Uncomment the following line to console log results of query
    //console.log(q);

    if(!q)
    { // Database returned no data
        return res.status(404).json({err});
    } else {
        return res.status(200).json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single trip
        .exec();

    //Uncomment the following line to console log results of query
    //console.log(q);

    if(!q)
    { // Database returned no data
        return res.status(404).json({err});
    } else {
        return res.status(200).json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
