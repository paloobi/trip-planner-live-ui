$(document).ready( function() {

  $('.hotelList button').on('click', function() {
    var $selectHotel = $('.hotelList select').val();
    var $currHotel = $('.currHotel ul');

    var $newHotel = $('<div class="itinerary-item">' +
                    '<span class="title">' + $selectHotel + '</span>' +
                    '<button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')
    if (!$currHotel.children().length) {
      $currHotel.append($newHotel);
    } else {
      $currHotel.children().remove();
      $currHotel.append($newHotel);
    }

  });

  $('.restaurantList button').on('click', function() {
    var $selectRestaurant = $('.restaurantList select').val();
    var $currRestaurants = $('.currRestaurants ul');

    var $currRestaurantTitles = $('.currRestaurants span.title');

    var doesExist = false;
    for (var i = 0; i < $currRestaurantTitles.length; i++) {
      // why did we have to cast this iterated item into a jQuery object?
      if ( $selectRestaurant === $( $currRestaurantTitles[i] ).text() ) {
        doesExist = true;
        break;
      }
    }

    if (!doesExist) {
      var $newRestaurant = $('<div class="itinerary-item">' +
                      '<span class="title">' + $selectRestaurant + '</span>' +
                      '<button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
      $currRestaurants.append($newRestaurant);
    }

  });

  $('.activityList button').on('click', function() {
    var $selectActivity = $('.activityList select').val();
    var $currActivities = $('.currActivities ul');

    var $currActivityTitles = $('.currActivities span.title');

    var doesExist = false;
    for (var i = 0; i < $currActivityTitles.length; i++) {
      if ( $selectActivity === $( $currActivityTitles[i] ).text() ) {
        doesExist = true;
        break;
      }
    }

    if (!doesExist) {
      var $newActivity = $('<div class="itinerary-item">' +
                      '<span class="title">' + $selectActivity + '</span>' +
                      '<button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
      $currActivities.append($newActivity);
    }

  });

})
