// Determine if Geolocation is Possible with browser
if ("geolocation" in navigator) {
  $('.js-geolocation').show();
} else {
  $('.js-geolocation').hide();
}

// Grab location according to Longitude and Latitude
$('.js-geolocation').on('click', function(){
  navigator.geolocation.getCurrentPosition(function(position){
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
  });
});

$(document).ready(function() {
  loadWeather('Columbus',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li></ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}


// Switch Statement for Background Images
switch(weather.code) {
  case 32:
  case 34:
  case 36:
    // Clear Day
    $('#weather').css('background-image', url(img/clear-day.jpg));
    break;
  case 31:
  case 33:
    // Clear Night
    $('#weather').css('background-image', url(img/clear-night.jpg));
    break;
  case 26:
  case 28:
    // Cloudy
    $('#weather').css('background-image', url(img/cloudy.jpeg));
    break;
  case 20:
  case 21:
  case 22:
    // Fog
    $('#weather').css('background-image', url(img/fog.jpg));
    break;
  case 17:
  case 35:
    // Hail
    $('#weather').css('background-image', url(img/hail.jpg));
    break;
  case 23:
  case 24:
    // Wind
    $('#weather').css('background-image', url(img/wind.jpg));
    break;
  case 30:
  case 44:
    // Partly Cloudy Day
    $('#weather').css('background-image', url(img/partly-cloudy-day.jpeg));
    break;
  case 27:
  case 29:
    // Partly Cloudy Night
    $('#weather').css('background-image', url(img/partly-cloudy-night.jpeg));
    break;
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
  case 40:
    // Rain
    $('#weather').css('background-image', url(img/rain.jpeg));
    break;
  case 5:
  case 6:
  case 7:
  case 18:
    // Sleet
    $('#weather').css('background-image', url(img/sleet.jpg));
    break;
  case 13:
  case 14:
  case 15:
  case 16:
  case 19:
  case 25:
  case 41:
  case 42:
  case 43:
  case 46:
    // Snow
    $('#weather').css('background-image', url(img/snow.jpeg));
    break;
  case 3:
  case 4:
  case 37:
  case 38:
  case 39:
  case 45:
  case 47:
    // Thunderstorm
    $('#weather').css('background-image', url(img/thunderstorm.jpg));
    break;
  case 0:
    // Tornado
    $('#weather').css('background-image', url(img/tornado.jpg));
    // Alert about seeking Shelter
    break;
  case 1:
  case 2:
    //hurricane
    $('#weather').css('background-image', url(img/hurricane.jpg));
    //alert about seeking Shelter
    break;
  default:
    // Look out window meme
    $('#weather').css('background-image', url(img/noweather.png));
    break;
}
