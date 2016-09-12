$('#submit').on('click', 
    function Go(key){
      var search = $('#search').val();
      var apiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&limit=10&namespace=0&profile=fuzzy&format=json';

      $('#content-area').html('');

      $.ajax({
        url: apiURL,
        type:'GET',
        dataType: 'jsonp',
        async:'true',  
      }).done(dataHandler);

    });

$(document).on('keypress', 
    function Go(key){
      if(key.which == 13){
        var search = $('#search').val();
        var apiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&limit=10&namespace=0&profile=fuzzy&format=json';

        $('#content-area').html('');

        $.ajax({
          url: apiURL,
          type:'GET',
          dataType: 'jsonp',
          async:'true',  
        }).done(dataHandler);
      }

    });


  function dataHandler(data){
    console.log(data);


    if (data){
      for (var i=0; i < 10; i++){
        if (data[1][i] == undefined || data[2][i] == undefined){
          break;
        } else
        $('#content-area').append('<div class="results row"><a href=' + data[3][i] + '><div class="text-center well"><h2>' + data[1][i] + '</h2><p>' + data[2][i] + '</p></div></a></div>');

     }
    }
  }