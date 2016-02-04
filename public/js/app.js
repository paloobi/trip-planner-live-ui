$(document).ready( function() {

  $('.hotelList button').on('click', function() {
    var selectHotel = $('.hotelList select').val();
    var $currHotel = $('.currHotel ul');

    var $newHotel = $('<div class="itinerary-item">' +
                    '<span class="title">' + selectHotel + '</span>' +
                    '<button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
    if (!$currHotel.children().length) {
      $currHotel.append($newHotel);
    } else {
      $currHotel.children().remove();
      $currHotel.append($newHotel);
    }

  });

  $('.restaurantList button').on('click', function() {
    var selectRestaurant = $('.restaurantList select').val();
    var $currRestaurants = $('.currRestaurants ul');

    var currRestaurantTitles = $('.currRestaurants span.title').map(function(idx, val) {
      return $(val).text();
    }).get();
    
    if ( currRestaurantTitles.indexOf(selectRestaurant) === -1 ) {
      var $newRestaurant = $('<div class="itinerary-item">' +
                      '<span class="title">' + selectRestaurant + '</span>' +
                      '<button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
      $currRestaurants.append($newRestaurant);
    }

  });

  $('.activityList button').on('click', function() {
    var selectActivity = $('.activityList select').val();
    var $currActivities = $('.currActivities ul');

    var currActivityTitles = $('.currActivities span.title').map(function(idx, val) {
      return $(val).text();
    }).get();

    if (currActivityTitles.indexOf(selectActivity) === -1) {
      var $newActivity = $('<div class="itinerary-item">' +
                      '<span class="title">' + selectActivity + '</span>' +
                      '<button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
      $currActivities.append($newActivity);
    }

  });

  // $('ul .remove').on('click', function() {
  //   console.log(this);
  // });

  $('.list-group').on('click', '.itinerary-item button.remove', function() { 
    $(this).parent().remove();
  });

  $('.add-day').on('click', function() {
    //find value of last sibling
    var lastDay = Number($(this).siblings().last().text()) + 1;
    console.log(lastDay);

    var newDay = '<button class="btn btn-circle day-btn">'+ lastDay +'</button>';

    $(newDay).insertBefore($(this));

    //create variable

    //append button with new value


  })

});
