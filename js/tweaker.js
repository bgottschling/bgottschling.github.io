
var suggested = 0;
function getStream() {
	var channels = ['freecodecamp','ESL_SC2',"brndng"];


	
	channels.forEach(function(chan){
		buildViewer(chan);
	});
	
}

getStream();

function buildViewer(chanData) {

    console.log("success");
	console.log("channel is " + chanData);

	
	if (suggested < 3){
		$('#sec1').append('<div class="well col-sm-4 stream-item "><a href="http://player.twitch.tv/?channel='+ chanData +'&data-paused=true" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="http://player.twitch.tv/?channel='+ chanData +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ chanData +'<p></div></a></div>');
		suggested++;	
	} else{
		$('#sec2').append('<div class="well col-sm-4 stream-item "><a href="http://player.twitch.tv/?channel='+ chanData +'&data-paused=true" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="http://player.twitch.tv/?channel='+ chanData +'&data-paused=true"></iframe></div><div class="text-center caption"><p>'+ chanData +'<p></div></a></div>');
	}

}

