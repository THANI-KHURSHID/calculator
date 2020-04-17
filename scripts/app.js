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
