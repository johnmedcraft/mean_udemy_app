//REQUIRES
var express = require('express');
//INITIATE EXPRESS ROUTER
var router = express.Router();
//REQUIRE CONTROLLERS
var ctrlHotels = require('../controllers/hotels.controllers.js');

//DEFINE ROUTES
router
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll);

router
  .route('/hotels/:hotelId')
  .get(ctrlHotels.hotelsGetOne);

//EXPORT ROUTER
module.exports = router;