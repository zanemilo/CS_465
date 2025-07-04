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

// POST: /trips - add a new trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
    });

    const q = await newTrip.save();

        if(!q) 
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { //Return new trip
            return res
                .status(201)
                .json(q);
        }

        // Uncomment the following line to console log results of query
        // console.log(q);
}

// PUT: /trips/:tripCode - update an existing Trip
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
    // Uncomment for debugging
    // console.log(req.params);
    // console.log(req.body);

    try {
        const q = await Model.findOneAndUpdate(
            { 'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true } // Return the updated document
        ).exec();

        if (!q) {
            // Database returned no data
            return res.status(404).json({ message: "Trip not found" });
        } else {
            // Return resulting updated trip
            return res.status(200).json(q);
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }

    // Uncomment the following line to show results of operation on the console
    // console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
