var hotelData = require('../data/hotel-data.json');

//GET ALL HOTELS
module.exports.hotelsGetAll = function(req, res) {
  console.log('GET the hotels');
  res
    .status(200)
    .json(hotelData);
};

//GET ONE HOTEL BY ID - URL PARAM
module.exports.hotelsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  var thisHotel = hotelData[hotelId];
  console.log('GET the one hotel with ID: ' + hotelId);
  res
    .status(200)
    .json(thisHotel);
};