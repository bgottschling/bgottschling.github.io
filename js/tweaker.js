$(window).load(addChannels());


const addChannels = (chan) => {
	var channels = ['freecodecamp','ESL_SC2','frankieonpcin1080p'];

	if (chan){
		channels.push(chan);
	}

	for (var i = 0, var len = channels.length; i < len; i++){
		getStream(channels[i]);
		channels.shift();
	}

}


const getStream = (chan) => {


	var apiURL = 'https://api.twitch.tv/kraken/streams/' + chan +'';
	console.log(chan);
	$.ajax({
		type:'GET',
		dataType:'json',
		URL: apiURL
	}).done(buildViewer);
}

const buildViewer = (data) => {
	var $sec1 = $('#sec1');
	var $sec2 = $('#sec2');
	var suggested = 0;
	if (suggested < 3){
		$sec1.append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ data.channel.name +'" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ data.channel.name +'<p></div></a></div>');
		suggested++;	
	} else if (suggested > 3){
		$sec1.append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ data.channel.name +'" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ data.channel.name +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ data.channel.name +'<p></div></a></div>');
	}

}