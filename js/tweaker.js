//$(window).load(getStream());


function getStream() {
	var channels = ['freecodecamp','ESL_SC2','frankieonpcin1080p'];
	var chan = 'ESL_SC2'


	buildViewer(chan);
	//channels.forEach(function(chan){

		var apiURL = 'https://api.twitch.tv/kraken'; //+ chan;
		/*console.log(apiURL);
		$.ajax({
			type:'GET',
			dataType:'json',
			URL:apiURL,
			headers:{
				'Client-ID':'fogk4a9ms544lema5ki24jvdbz8g4wz'
			},
			async:'false'
		}).done(buildViewer);
	//});*/
}

getStream();

function buildViewer(chanData) {

    console.log("success");
	console.log("channel is" + chanData);

	var suggested = 0;
	if (suggested < 3){
		$('#sec1').append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ chanData +'&data-paused=true" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ chanData +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ chanData +'<p></div></a></div>');
		suggested++;	
	} else if (suggested > 3){
		$('#sec2').append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ chanData +'&data-paused=true" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ chanData +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ chanData +'<p></div></a></div>');
	}

}

