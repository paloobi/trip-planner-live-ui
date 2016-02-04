var express = require('express');
var router = express.Router();
var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Promise = require('bluebird');

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.find(),
    Restaurant.find(),
    Activity.find()
  ])
  .spread(function(hotels, restaurants, activities) {
    res.render('index', {
      all_hotels: hotelsArr,
      all_restaurants: restaurants,
      all_activities: activities
    });
  })
})


// router.get('/', function(req, res, next){

//   Hotel.find({}, function(err, hotels){
//     if (err) return next(err)
//     Restaurant.find({}, function(err, restaurants){
//       if (err) return next(err)
//       Activity.find({}, function(err, activities){
//         if (err) return next(err)
//         res.render('index', {
//           all_hotels: hotel,
//           all_restaurants: restaurants,
//           all_activities: activities
//         });
//       })
//     })
//   })
// })



module.exports = router;

















