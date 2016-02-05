$(document).ready( function() {

  // location LIST, can be a hotel, restaurants or activities list
  // handles adding and removing items from DOM
  function LocationList(type) {
    this.type = type;
    this.contents = [];
  }

  // add a new item to this list
  LocationList.prototype.add = function () {
    var selectItem = $('.' + this.type +'-list select').val();


    if (this.type === 'hotel' && this.contents.length) {
      this.contents = [];
    }
    var newItem = '<div class="itinerary-item">' +
                '<span class="title">' + selectItem + '</span>' +
                '<button class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
    if (this.contents.indexOf(newItem) === -1 ) {
      this.contents.push(newItem);
      this.show();
    }
  } 

  // display this list in the DOM
  LocationList.prototype.show = function () {
    var $currItems = $('.curr-' + this.type + ' ul');
    $currItems.html( this.contents.join("") );
  }

  // remove an item from the list
  LocationList.prototype.delete = function ($item) {
    var name = $item.siblings('.title').text();
    var index = this.contents.indexOf(name);
    this.contents.splice(index, 1);
    $item.parent().remove();
  } 

  // DAY containing a list each for hotel, restaurants, activities
  function Day(number) {
    this.day = number;
    this.hotel = new LocationList('hotel');
    this.restaurants = new LocationList('restaurants');
    this.activities = new LocationList('activities');
  }

  // show the day's lists
  Day.prototype.show = function () {
    this.hotel.show();
    this.restaurants.show();
    this.activities.show();
  }

  // ITINERARY containing a list of days
  function Itinerary() {
    this.days = [new Day(1)];
  }

  // add a day to the itinerary
  Itinerary.prototype.addDay = function(num) {
    this.days.push(new Day(num));

  }

  // remove a day from the itinerary
  Itinerary.prototype.removeDay = function() {

  }

  // instantiate a single itinerary instance
  var currItinerary = new Itinerary();


  function getCurrentDay() {
    return $('.current-day').text();
  }
  $('.hotel-list button').on('click', function() {
    currItinerary.days[getCurrentDay() - 1].hotel.add();
  });

  $('.restaurants-list button').on('click', function() {
    currItinerary.days[getCurrentDay() - 1].restaurants.add();
  });

  $('.activities-list button').on('click', function() {
    currItinerary.days[getCurrentDay() - 1].activities.add();
  });

  $('.list-group').on('click', '.itinerary-item button.remove', function() {
    var $item = $(this);
    var listType = $item.parent().parent().parent().attr('class');
    listType = listType.slice(listType.indexOf('-') + 1);
    if (listType === 'hotel') {
      hotel.delete($item);
    } else if (listType === 'restaurants') {
      restaurants.delete($item);
    } else if (listType === 'activities') {
      activities.delete($item);
    }
  });

  $('.add-day').on('click', function() {
    //find value of last sibling

    var lastDay = Number($(this).siblings().last().text()) + 1;
    currItinerary.addDay(lastDay);

    var newDay = '<button class="btn btn-circle day-btn">'+ lastDay +'</button>';

    $(newDay).insertBefore($(this));

  });

  $('.day-buttons').on('click', '.day-btn', function() {
    var oldDay = $('.current-day');

    if (!$(this).hasClass('add-day') ) {
      oldDay.removeClass('current-day');
      
      var newDay = $(this);
      newDay.addClass('current-day');

      currItinerary.days[Number(newDay.text()) - 1].show();
    }

  });

});
