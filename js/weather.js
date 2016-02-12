


function getWeather(lat, lon) {
	
  var apiURI = "api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lon +"&appid=06170c100199dbae1e223cc3dfad960b";
  $.ajax({
  	url: apiURI,
    type: "GET",
    success: function(resp) {
      console.log("made it");
    	alert(resp);
    },
    error: function(error) {
      console.log("an error has occurred")
    	alert(error);
    }
  });
 }

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position){
    getWeather(position.coords.latitude, position.coords.longitude);
  })
} else {
alert ("geolocation not available");
}