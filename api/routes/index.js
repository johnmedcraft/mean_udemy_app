//REQUIRES
var express = require('express');
//INITIATE EXPRESS ROUTER
var router = express.Router();
//REQUIRE CONTROLLERS
var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

//DEFINE HOTEL ROUTES
router
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll);

router
  .route('/hotels/:hotelId')
  .get(ctrlHotels.hotelsGetOne);

router
  .route('/hotels/new')
  .post(ctrlHotels.hotelsAddOne);

//DEFINE REVIEWS ROUTES
router
  .route('/hotels/:hotelId/reviews')
  .get(ctrlReviews.reviewsGetAll);

router
  .route('/hotels/:hotelId/reviews/:reviewId')
  .get(ctrlReviews.reviewsGetOne);

//EXPORT ROUTER
module.exports = router;