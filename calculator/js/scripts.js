// // business logic
// function add(number1, number2) {
//   return number1 + number2;
// }
// function sub(number3, number4) {
//   return number3 - number4;
// }
// function mult(number5, number6) {
//   return number5 * number6;
// }
// function div(number7, number8) {
//   return number7 / number8;
// }
// function compute(num1, operator, num2) {
//   return num1 + operator + num2;
// }



// const num1 = parseInt(prompt("Enter a number"));
// const operator = prompt("Enter an operator");
// const num2 = parseInt(prompt("Enter another number"));

// (compute(num1, operator, num2));

setTimeout(function compute() {
  const num1 = parseInt(window.prompt("enter a number"))
  const operator = window.prompt("enter an operator")
  const num2 = parseInt(window.prompt("enter a 2nd number"))

  {
    switch (operator) {
      case ('+'): window.alert(num1 + "+" + num2 + "=" + (num1 + num2)); break;
      case ('-'): window.alert(num1 + "-" + num2 + "=" + (num1 - num2)); break;
      case ('x'): window.alert(num1 + "*" + num2 + "=" + (num1 * num2)); break;
      case ('*'): window.alert(num1 + "*" + num2 + "=" + (num1 * num2)); break;
      case ('/'): window.alert(num1 + "/" + num2 + "=" + (num1 / num2)); break;
      case ('bone'): let boneResult= (window.alert ((num1 * num2) + " BONES!")); break;
    }
    
  }

  compute()
}, 100);
compute()
