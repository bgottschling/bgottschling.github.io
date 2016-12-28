var button0 = document.querySelector("#button0");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var button5 = document.querySelector("#button5");
var button6 = document.querySelector("#button6");
var button7 = document.querySelector("#button7");
var button8 = document.querySelector("#button8");
var button9 = document.querySelector("#button9");
var screen  = document.querySelector("#digits");
var buttondot = document.querySelector("#buttondot");
var expression = [];
var mathExpression;
display();
button0.onclick  = addValue;
button1.onclick  = addValue;
button2.onclick  = addValue;
button3.onclick  = addValue;
button4.onclick  = addValue;
button5.onclick  = addValue;
button6.onclick  = addValue;
button7.onclick  = addValue;
button8.onclick  = addValue;
button9.onclick  = addValue;
equal.onclick    = addValue;
add.onclick      = addValue;
subtract.onclick = addValue;
mult.onclick     = addValue;
div.onclick      = addValue;
del.onclick      = addValue;
ac.onclick       = addValue;
buttondot.onclick = addValue;

function display(value) {
  screen.textContent = value;
}

       function addValue(button) {
  var buttonValue = button.target.value;

  if(buttonValue == '=') {
 
    mathExpression = eval(mathExpression);

    expression.length = 0;
    expression.push(mathExpression);
  }
  else if(buttonValue == 'ac') {
    mathExpression = expression.length = 0;
  }
  else if(buttonValue == 'del'){
    expression.pop();
    mathExpression = expression.join('');
  }
  else if(buttonValue == '.') {
    mathExpression = parseFloat(mathExpression);
    expression.push(buttonValue);
    mathExpression = expression.join('');
  }
 
  else {
    mathExpression = parseInt(mathExpression, 10);
    expression.push(buttonValue);
    mathExpression = expression.join('');
  }
  display(mathExpression);
}