function sum(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero!");
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  sum,
  divide,
  multiply,
  subtract,
};
