var pomodoro = {};
$(document).ready(
  function() {
    pomodoro.start = false;
    pomodoro.wTime = 25;
    pomodoro.bTime = 5;
    pomodoro.breakCount = 0;
    pomodoro.inter = "";
    $("#breakTime").text(pomodoro.bTime);
    $("#workTime").text(pomodoro.wTime);

    $("#workPlus").click(function() {
      pomodoro.wTime += 60000;
      $("#workTime").text(Math.floor(pomodoro.wTime / 60000));
    });

    $("#workMinus").click(function() {
      if(pomodoro.wTime > 0){
        pomodoro.wTime -= 60000;
        $("#workTime").text(Math.floor(pomodoro.wTime / 60000));
      }
    });

    $("#breakPlus").click(function() {
      pomodoro.bTime += 60000;
      $("#breakTime").text(Math.floor(pomodoro.bTime / 60000));
    });

    $("#breakMinus").click(function() {
      if(pomodoro.bTime > 0){
        pomodoro.bTime -= 60000;
        $("#breakTime").text(Math.floor(pomodoro.bTime / 60000));
      }
    });

    $("#start").click(function() {
      $("#displayTime").css("color", "green");
      if (pomodoro.inter){
        clearInterval(pomodoro.inter);
      }
      pomodoro.breakCount = 0;
      timer(pomodoro.wTime);
      console.log(inter);
    });

    $("#stop").click(function() {
      clearInterval(pomodoro.inter);
      pomodoro.breakCount = 0;
      $("#displayTime").text("Stopped");
    });

    pomodoro.wTime *= 1000 * 60;
    pomodoro.bTime *= 1000 * 60;

    function timer(time) {
        
       pomodoro.inter = setInterval(
        function() {

          var sec = (time / 1000 % 60);
          var min = parseInt(time / 60000);

          if (sec < 10) {

            $("#displayTime").text(min + ":" + "0" + sec);

          } else {

            $("#displayTime").text(min + ":" + sec);
          }
          
          time = time - 1000;

          if (time < 0 && pomodoro.breakCount) {
            document.getElementById("notify1").play();
            clearInterval(pomodoro.inter);
            $("#displayTime").text("Done");
          } else if (time < 0) {
            pomodoro.breakCount = 1;
            document.getElementById("notify").play();
            clearInterval(pomodoro.inter);
            timer(pomodoro.bTime);
            $("#displayTime").css("color", "red");
          }
        }, 1000

      );

      console.log("function ran");
    }

  });