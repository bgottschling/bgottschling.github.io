$(document).ready(
  
  $(".navbar-right li").hover(
    function() {
      if (!$(this).hasClass('animated')) {
        $(this).dequeue().stop().animate({
          width: "120px"
        });
      }
    },
    function() {
      $(this).addClass('animated').animate({
          width: "103px"
        }, "normal", "linear",
        function() {
          $(this).removeClass('animated').dequeue();
        }
      );
    }
  ),

  $("#home").hover(
    function() {
      $(".home").addClass("animated bounce");
    },

    function() {
      $(".home").removeClass("animated bounce");
    }),

  $("#about").hover(
    function() {
      $(".about").addClass("animated bounce");
    },

    function() {
      $(".about").removeClass("animated bounce");
    }),

  $("#portfolio").hover(
    function() {
      $(".portfolio").addClass("animated bounce");
    },

    function() {
      $(".portfolio").removeClass("animated bounce");
    }),
  $("#contact").hover(
    function() {
      $(".contact").addClass("animated bounce");
    },

    function() {
      $(".contact").removeClass("animated bounce");
    })
);