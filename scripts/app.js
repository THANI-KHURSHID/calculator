let firstNumber = "";
let secondNumber = "";
let operator = "";
let operatorCalled = false;
let currentValue = 0;

/* Functions to perform calculations */
const adder = (a, b) => a + b;
console.log(adder(6, 5));

const subtractor = (a, b) => (a > b ? a - b : b - a);
console.log(subtractor(2, 5));

const multiplier = (a, b) => a * b;
console.log(multiplier(6, 5));

const divider = (a, b) => a / b;
console.log(divider(6, 5));
/* The Operate functoin */
function operate(operator, a, b) {
  if (operator === "+") return adder(a, b);
  else if (operator === "-") return subtractor(a, b);
  else if (operator === "*") return multiplier(a, b);
  else if (operator === "/") return divider(a, b);
}
const display = document.getElementById("displayResult");

const numberKeys = document.querySelectorAll(".calc_button");
const operatorKeys = document.querySelectorAll(".calc_operator");
const equalsKey = document.querySelector("#calc_equal");



function populateDisplay(e) {
  display.value = this.value;
  currentValue = this.value;
  if (operatorCalled) {
    secondNumber += currentValue;
    console.log(secondNumber);
  } else {
    firstNumber += currentValue;
    console.log(firstNumber);
  }
}
for (let i = 0; i < numberKeys.length; i++) {
  numberKeys[i].addEventListener("click", populateDisplay);
}
for (let j = 0; j < operatorKeys.length; j++) {
  operatorKeys[j].addEventListener("click", function (e) {
    display.value = this.value;
    operator = this.value;
    operatorCalled = true;
    console.log(`${operator} ${operatorCalled}`);
  });
}
equalsKey.addEventListener("click" , function(e) {
  let result = operate( operator , Number(firstNumber) , Number(secondNumber) );
  console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} `);
  operatorCalled = false;
  secondNumber = " ";
  firstNumber = " ";
  display.value = result;

}) 
//TODO: allow cascade calls.
//TODO: Better organization of code.

