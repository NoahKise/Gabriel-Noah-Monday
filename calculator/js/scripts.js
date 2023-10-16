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
// function compute(number1, operator, number2) {
//   const equation = parseInt(prompt("enter a number")) + prompt("enter an operator") + parseInt(prompt("enter another number"));
//   return equation;
// }


//user interface logic
// const number1 = parseInt(prompt("enter a number"));
// const operator = prompt("enter an operator")
// const number2 = parseInt(prompt("enter another number"));
// const equation = parseInt(prompt("enter a number")) + prompt("enter an operator") + parseInt(prompt("enter another number")); 
confirm("Do you want to do addition?")

if(confirm = true){
  const number1 = parseInt(prompt("enter a number"));
  const number2 = parseInt(prompt("enter another number"));
  window.alert(add(number1, number2))
}
if(confirm = false){
  confirm("Do you want to do subtraction?")
  if(confirm = true){
    const number1 = parseInt(prompt("enter a number"));
    const number2 = parseInt(prompt("enter another number"));
    window.alert(sub(number1, number2))
  }
}
// // window.alert(compute(number1, operator, number2));

const number3 = parseInt(prompt("enter a number to subtract from"));
const number4 = parseInt(prompt("enter another number to subtract"));

window.alert(sub(number3, number4));

const number5 = parseInt(prompt("enter a number to multiply"));
const number6 = parseInt(prompt("enter another number to multiply"));

window.alert(mult(number5, number6));

const number7 = parseInt(prompt("enter a number to divide"));
const number8 = parseInt(prompt("enter another number to divide"));

window.alert(div(number7, number8));