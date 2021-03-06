//necessary global variables for selector caching.
var $tempMode = $("#tempMode");
var $tempText = $("#temp-text");
var $windText = $("#wind-text");
//$(document).ready(function() {
  
//function for instruction dialog
  $(function() {
    $("#dialog").dialog();
  });

  // this function takes the temperature from the dataHandler and displays the temperature according to the correct temperature unit, and colors the temperature hot or cold.
  function formatTemperature(kelvin) {
    
    
    var clicked = false;
    var fahr = ((kelvin * 9 / 5) - 459.67).toFixed(0);
    var cels = (kelvin - 273.15).toFixed(1);
    //initial temperature display
    $tempText.html(fahr);

    var firstClick = false;
    //click handler to update the temperature unit of measurement.
    $tempMode.off("click").on("click", function() {
      firstClick = true;
      console.log(clicked);
      clicked === false ? clicked = true : clicked = false;
      clicked === true ? $tempMode.html("C&deg") : $tempMode.html("F&deg");
      if (clicked) {
        $tempText.html(cels);
      } else
        $tempText.html(fahr);
    });

    if (cels > 24) {
      $("#temp-text").css("color", "red");
    } else if (cels < 18) {
      $("#temp-text").css("color", "blue");
    }
  }
  //handles response data and formats it accordingly since it is an asynchronous response object all data handling and formatting must be done within this function.
  
  function dataHandler(data) {
    dataString = JSON.stringify(data);
    console.log(data.main.temp);

    formatTemperature(data.main.temp);

    if (data.main.temp && data.sys) {
      // display icon
      if (data.weather) {
        var imgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $("#weatherImg").attr("src", imgURL);
        $("#weather-text").html(data.weather[0].description);
      }
      // display wind speed
      if (data.wind) {
        var knots = data.wind.speed * 1.9438445;
        $windText.html(knots.toFixed(1) + " Knots");
      }
    }
}
  //This calls the api with the correct coordinates provided by the getLocation function
  function getWeather(locdata) {
    console.log("getWeather has been called.")
    var lat = locdata.lat;
    var lon = locdata.lon;
    var apiURI = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=6c788c55fe75c1f415d3cfdc814d0218";

    if (locdata){ 
      console.log("success");
      $("#city-text").html(locdata.city + ", " + locdata.region);
    } else {
    console.log("fail");
    }

    //call weather api for weather data
    console.log("success getWeather");
    console.log(apiURI);
    return $.ajax({
      url: apiURI,
      dataType: "json",
      type: "GET",
      async: "true",
    }).done(dataHandler);

    // display location name

  }

  //Passes the browser's geolocation into the getWeather function once its done the response from the getWeather call will be passed to the data handler for formatting.
  var counter = 0;

  function getLocation() {
    console.log("Update# " + counter++);
    
    //call location api for location data
    return $.ajax({
      url: "http://ip-api.com/json",
      dataType: "json",
      type: "GET",
      async: "true",
    });
  }

    /*
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("test");
        getWeather(position.coords.latitude, position.coords.longitude).done(dataHandler);
      })
    } else {
      alert("geolocation not available");
    }
  }
    */
  var updateInterval = setInterval(getLocation().done(getWeather), 300000);
//});