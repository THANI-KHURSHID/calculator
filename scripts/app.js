let expression = "";
let operatorCalled = false;
let secondNumber = "";


const display = document.getElementById("displayResult");
const numberKeys = document.querySelectorAll(".calc_button");
const operatorKeys = document.querySelectorAll(".calc_operator");
const equalsKey = document.querySelector("#calc_equal");
const clear = document.querySelector("#calc_clear");



function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}
function populateDisplay(e) {
  if(operatorCalled === true) {
    secondNumber+=this.value;
  }
  expression += this.value;
  display.value = expression;
}
for (let i = 0; i < numberKeys.length; i++) {
  numberKeys[i].addEventListener("click", populateDisplay);
}
function setOperator(e) {
  operatorCalled = true;
  expression += this.value;
  display.value = expression;
  console.log(`${operatorCalled}`);
  secondNumber = "";
}
for (let j = 0; j < operatorKeys.length; j++) {
  operatorKeys[j].addEventListener("click", setOperator);
}
function getResult(e) {
  if (operatorCalled && secondNumber !== "" ) {
    let result = parse(expression);
    console.log(`${expression} = ${result} `);
    display.value = result;
    expression = "";
  } else {
    return;
  }
}
equalsKey.addEventListener("click", getResult);
function clearScreen() {
  display.value = "";
  expression = "";
  secondNumber = "";
} 
clear.addEventListener("click" , clearScreen);
