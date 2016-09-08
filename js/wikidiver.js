$('#submit').on('click', 
    function Go(){
      var search = $('#search').val();
      var apiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&limit=10&namespace=0&profile=fuzzy&format=json';

      $.ajax({
        url: apiURL,
        type:'GET',
        dataType: 'jsonp',
        async:'true',  
      }).done(dataHandler);

    });


  function dataHandler(data){
    console.log(data);
  }