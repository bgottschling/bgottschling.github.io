var canvas;
var ctx;
var player;
var computer;
var width;
var height;
var positions = new Array(9);
var midpointW;
var midpointH;
var squares;
var locations;
var winners;
var playerScore;
var compScore;
var turn;

$(document).ready(function() {
 canvas = document.getElementById('background');
  ctx = canvas.getContext('2d');
  width = canvas.width;
  height = canvas.height;

  $('#gameOver').hide();
  drawBoard();
  choose();
});

function drawBoard() {
  ctx.save();

  ctx.clearRect(0, 0, width, height);

  ctx.strokeStyle = '#DDDDDD';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#ddaaaa';

  ctx.fillRect(0, 0, width, height);
  ctx.strokeRect(0, 0, width, height);

  for (var i = 1; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(i * width / 3, 0);
    ctx.lineTo(i * width / 3, height);
    ctx.moveTo(0, i * height / 3);
    ctx.lineTo(width, i * height / 3);
    ctx.stroke();
  }
  ctx.restore();
}

function gamePlay() {
  if (squares.length < 1) {
    gameOver('It\'s A Draw');
  }
  if (turn == 'comp' && squares.length >= 1) {
    compMove();
  }

}

$('.square').click(function() {
  var theSquare = parseInt($(this).attr('id'));
  if (positions[theSquare] == '') {
    playerScore += parseInt($(this).attr('data'))
    placeIcon(player, theSquare)
    if (check(playerScore) > -1) {
      drawLine(check(playerScore));
      gameOver('You Win!');
    }
    turn = 'comp'
    gamePlay();
  }
});

function drawLine(score) {
  ctx.strokeStyle = '#FF0000';
  ctx.beginPath();
  switch (score) {
    case 7:
      ctx.moveTo(locations[0][0], locations[0][1]);
      ctx.lineTo(locations[2][0], locations[2][1]);
      break;
    case 73:
      ctx.moveTo(locations[0][0], locations[0][1]);
      ctx.lineTo(locations[6][0], locations[6][1]);
      break;
    case 273:
      ctx.moveTo(locations[0][0], locations[0][1]);
      ctx.lineTo(locations[8][0], locations[8][1]);
      break;
    case 146:
      ctx.moveTo(locations[1][0], locations[1][1]);
      ctx.lineTo(locations[7][0], locations[7][1]);
      break;
    case 292:
      ctx.moveTo(locations[2][0], locations[2][1]);
      ctx.lineTo(locations[8][0], locations[8][1]);
      break;
    case 84:
      ctx.moveTo(locations[2][0], locations[2][1]);
      ctx.lineTo(locations[6][0], locations[6][1]);
      break;
    case 56:
      ctx.moveTo(locations[3][0], locations[3][1]);
      ctx.lineTo(locations[5][0], locations[5][1]);
      break;
    case 448:
      ctx.moveTo(locations[6][0], locations[6][1]);
      ctx.lineTo(locations[8][0], locations[8][1]);
      break;
  }
  ctx.stroke();
}

function reset() {
  $('.square').addClass("active"),
  positions.fill('');
  squares = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  width = canvas.width;
  height = canvas.height;
  midpointW = width / 6;
  midpointH = height / 6;
  locations = [
    [midpointW, midpointH],
    [width / 2, midpointH],
    [width - midpointW, midpointH],
    [midpointW, height / 2],
    [width / 2, height / 2],
    [width - midpointW, height / 2],
    [midpointW, height - midpointH],
    [width / 2, height - midpointH],
    [width - midpointW, height - midpointH]
  ];
  winners = [7, 56, 448, 73, 146, 292, 273, 84];
  playerScore = 0;
  compScore = 0;

  positions.fill('');
  squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  turn = 'comp';
  drawBoard();
  gamePlay();
}

function placeIcon(team, spot) {
  ctx.save();
  ctx.fillStyle = 'Black';
  ctx.font = '30pt Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(team, locations[spot][0], locations[spot][1]);
  var arrLoc = squares.indexOf(spot);
  squares.splice(arrLoc, 1);
  ctx.restore();
  positions[spot] = team
  $('#'+spot).removeClass('active');
}

function check(score) {
  for (var i = 0; i < winners.length; i++) {
    if ((winners[i] & score) === winners[i]) {
      return winners[i];
    }
  }
  return -1;
}

function compMove() {
  turn = 'user';
  var compWin = checkWin(compScore, squares)
  console.log("compWin: " + compWin);
  var playerWin = checkWin(playerScore, squares);
  console.log("playerWin: " + playerWin);
  var compFork = makeFork(compScore, squares);
  console.log("compFork: " + compFork);
  var playerFork = makeFork(playerScore, squares);
  console.log("playerFork: " + playerFork);
  if (compWin > -1) { //Check for winning move
    // alert('win')
    compScore += parseInt($('#' + compWin).attr('data'))
    placeIcon(computer, compWin);
  } else if (playerWin > -1) { //Block player winning move
    //  alert('block')
    compScore += parseInt($('#' + playerWin).attr('data'))
    placeIcon(computer, playerWin);
  } else if (compFork > -1) { //Create a fork
    // alert('fork')
    compScore += parseInt($('#' + compFork).attr('data'))
    placeIcon(computer, compFork);
  } else if (playerFork > -1) { //Block player from creating a fork
    //  alert('block fork')
    compScore += parseInt($('#' + playerFork).attr('data'))
    placeIcon(computer, playerFork);
  } else if (squares.length < 9 && positions[4] == '') { //Take the center square (does not execute on first turn)
    compScore += parseInt($('#4').attr('data'));
    placeIcon(computer, 4);
  } else { //no ideal moves, make random move
    // alert('random')
    var compLoc = Math.floor(Math.random() * squares.length);
    var temp = squares[compLoc]
    compScore += parseInt($('#' + temp).attr('data'));
    placeIcon(computer, temp)
  }

  if (check(compScore) > -1) {
    drawLine(check(compScore));
    gameOver('Sorry, You\'ve Lost');
  }
  gamePlay()
}

//Finds a move that will result in a win
function checkWin(score, array) {
  var value;
  for (var spot in array) {
    value = parseInt($('#' + array[spot]).attr('data'))
    if (check(score + value) > -1) {
      return array[spot];
    }
  }
  return -1;
}

//Finds a move that will result in a fork
function makeFork(score) {
  var value, value2, newSquares;
  for (var spot in squares) {
    value = parseInt($('#' + squares[spot]).attr('data')); //simulate choosing potential spot
    newSquares = clone(squares) //copy squares to test hypothetical moves
    newSquares.splice(spot, 1); //remove potential spot from available list
    var win1 = checkWin(score + value, newSquares) //search for first winner
    if (win1 > -1) {
      newSquares.splice(newSquares.indexOf(win1), 1)
      for (var spot2 in newSquares) {
        var win2 = checkWin(score + value, newSquares) //check for second winner
        if (win2 > -1)
          return squares[spot]
      }
    }
  }
  return -1;
}

function clone(array) {
  var clone = new Array();
  for (var i in array) {
    clone.push(array[i]);
  }
  return clone;
}

function choose() {
  $('#choice').slideDown('slow');

  $('#btn-X').click(function() {
    player = 'X';
    computer = 'O'

    $('#choice').hide();
    reset()
  });

  $('#btn-O').click(function() {
    player = 'O';
    computer = 'X'

    $('#choice').hide();
    reset()
  });
}

function gameOver(message) {
  $('#message').text(message);
  $('#gameOver').fadeIn(1000).delay(1000).fadeOut(1000);
  positions.fill('X');
  setTimeout(function() {
    reset();
  }, 3000);
}