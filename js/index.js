$(document).ready(
   $(".navbar-right li").on("mouseenter", 
      function() {
        //console.log($("#"+ $(this).attr("id")));
        if (!$(this).hasClass('animated') && !$("#"+ $(this).attr("id")).hasClass("animated")) {
          $(this).stop("fx",true).velocity({
            width: "120px"
          });

           $("."+ $(this).attr("id")).dequeue("fx").stop("fx").addClass("animated bounce");
        } 
      }),
  $(".navbar-right li").on("mouseleave",
      function() {
           $(this).dequeue("fx").stop("fx").addClass('animated').velocity({
            width: "103px"
          }, "normal", "linear",
          function() {
            $("."+ $(this).attr("id")).dequeue("fx").removeClass("animated bounce");
            $(this).dequeue("fx").removeClass('animated').stop("fx",true);
          }
        );
      }
   )
);