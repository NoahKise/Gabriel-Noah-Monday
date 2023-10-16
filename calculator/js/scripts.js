// business logic
function add(number1, number2) {
  return number1 + number2;
}
function sub(number3, number4) {
  return number3 - number4;
}
function mult(number5, number6) {
  return number5 * number6;
}
function div(number7, number8) {
  return number7 / number8;
}
function compute(num1, operator, num2) {
  return num1 + operator + num2;
}


const num1 = parseInt(prompt("Enter a number"));
const operator = prompt("Enter an operator");
const num2 = parseInt(prompt("Enter another number"));

window.alert(compute(num1, operator, num2));