
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// NOTE: It is not a best practice to read a JSON file every time the webserver
// processes a request. This is a method used during development to support rapid
// prototyping and should be replaced before the applications goes into production.


/* GET travel view */
const travel = (req, res) => {
  res.render('travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
  travel
};