$(document).ready( function() {

  $('.hotelList button').on('click', function() {
    var currHotel = $('.hotelList select').val();
    console.log('hotel to add:', currHotel);
  });

  $('.restaurantList button').on('click', function() {
    var currRestaurant = $('.restaurantList select').val();
  });

  $('.activityList button').on('click', function() {
    var currActivity = $('.activityList select').val();
  });

})
