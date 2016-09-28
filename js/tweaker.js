
var suggested = 0;
$("#addGroupBtn").on('click', function(){
	var chan = $('addGroup').val(); 

	if($('.caption').each(function(index){
			if ($(this).text() == chan){
				console.log('chan is ' + chan + ':' + 'checking' + $(this).text());
				alert('You already have a channel by that name.');
				return false;
			}
		})
	) else
	buildViewer(chan);
});


function getStream() {
	var channels = ['freecodecamp','ESL_SC2',"brndng"];

	channels.forEach(function(chan){
		buildViewer(chan);
	});
	
}

getStream();

function buildViewer(chanData) {

    console.log('success');
	console.log('channel is ' + chanData);

	
	if (suggested < 3){
		$('#sec1').append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ chanData +'&autoplay=false" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ chanData +'&autoplay=false"></iframe></div><div class="text-center caption"><p>'+ chanData +'<p></div></a></div>');
		suggested++;	
	} else{
		$('#sec2').append('<div class="well col-sm-4 stream-item "><a href="https://player.twitch.tv/?channel='+ chanData +'&autoplay=false" target="_blank" class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel='+ chanData +'&autoplay=false"></iframe></div><div class="text-center caption"><p>'+ chanData +'<p></div></a></div>');
	}

}

