$(window).load(getStream());

var channels = ['freecodecamp','ESL_SC2','frankieonpcin1080p'];

function addChannels(chan){
	console.log('addChannels executed');

}


function getStream() {
	channels.forEach(function(chan){

		var apiURL = 'https://api.twitch.tv/kraken/streams/' + chan +'';
		console.log(chan);
		$.ajax({
			type:'GET',
			dataType:'jsonp',
			URL: apiURL
		}).done(buildViewer);

	});


}

function buildViewer(data) {
	console.log(data.channel);
	var $sec1 = $('#sec1');
	var $sec2 = $('#sec2');
	var suggested = 0;
	if (suggested < 3){
		$('#sec1').append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ data.channel.name +'<p></div></a></div>');
		suggested++;	
	} else if (suggested > 3){
		$('#sec2').append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ data.channel.name +'<p></div></a></div>');
	}

}