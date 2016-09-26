//$(window).load(getStream());

function buildViewer(data) {
	console.log("channel is" + data);

	var suggested = 0;
	/*if (suggested < 3){
		$('#sec1').append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ data.channel.name +'<p></div></a></div>');
		suggested++;	
	} else if (suggested > 3){
		$('#sec2').append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ data.channel.name +'<p></div></a></div>');
	}*/

}

function getStream() {
	var channels = ['freecodecamp','ESL_SC2','frankieonpcin1080p'];
	var chan = 'ESL_SC2'
	//channels.forEach(function(chan){

		var apiURL = 'https://api.twitch.tv/kraken/streams/' + chan;
		console.log(chan);
		$.ajax({
			type:'GET',
			dataType:'json',
			URL:apiURL,
			Headers:{
				'Client-ID': 'fogk4a9ms544lema5ki24jvdbz8g4wz'
			},
			async:'fasle'
		}).done(buildViewer).fail(alert("Your request has failed"));
	//});
}

getStream();


