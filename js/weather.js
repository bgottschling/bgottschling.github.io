


function getWeather(lat, lon) {
	
  var apiURI = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lon +"&appid=06170c100199dbae1e223cc3dfad960b";
  /*var obj;
  var xhr = new XMLHttpRequest();

  xhr.open("GET", apiURI, true);
  xhr.setRequestHeader('Content-Type', 'text/json');
  xhr.send();

  obj = xhr.response;

  console.log(obj);*/

  $.ajax({
  	url: apiURI,
    type: "GET",
    success: function(resp) {
      console.log("made it");
    	return JSON.stringify(resp);
    },
    error: function(error) {
      console.log("an error has occurred")
    	alert(error);
      return false;
    }
  });
 }

var strJson = "";

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position){
    strJson = getWeather(position.coords.latitude, position.coords.longitude);
    alert(strJson);
  })
} else {
alert ("geolocation not available");
}
