let expression = "";
let operatorCalled = false;



const display = document.getElementById("displayResult");
const numberKeys = document.querySelectorAll(".calc_button");
const operatorKeys = document.querySelectorAll(".calc_operator");
const equalsKey = document.querySelector("#calc_equal");



function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}
function populateDisplay(e) {
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
}
for (let j = 0; j < operatorKeys.length; j++) {
  operatorKeys[j].addEventListener("click", setOperator);
}
function getResult(e) {
  if (operatorCalled) {
    let result = parse(expression);
    console.log(`${expression} = ${result} `);
    display.value = result;
  } else {
    return;
  }
}
equalsKey.addEventListener("click", getResult);
