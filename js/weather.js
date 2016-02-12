


function getWeather(lat, lon) {
	
  var apiURI = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lon +"&appid=06170c100199dbae1e223cc3dfad960b";
  /*var obj;
  var xhr = new XMLHttpRequest();

  xhr.open("GET", apiURI, true);
  xhr.setRequestHeader('Content-Type', 'text/json');
  xhr.send();

  obj = xhr.response;

  console.log(obj);*/

  var data = $.parseJSON( $.ajax({
  	url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false"
  }).responseText);
  console.log(data);
  return data;
 }


var jsonStr = "";
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position){
   jsonStr = getWeather(position.coords.latitude, position.coords.longitude);
   console.log(jsonStr);
  })
} else {
alert ("geolocation not available");
}
