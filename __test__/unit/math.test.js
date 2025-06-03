const math = require("../../model/math.js");
test("sum two numbers", () => {
  expect(math.sum(1, 4)).toBe(5);
});

test("subtract two numbers", () => {
  expect(math.subtract(1, 4)).toBe(Number("-3"));
});

test("multiply two numbers", () => {
  expect(math.multiply(1, 4)).toBe(4);
});

test("divide two numbers", () => {
  expect(math.divide(4, 2)).toBe(2);
});

test("division by zero catch error", () => {
  try {
    const result = math.divide(4, 0);
  } catch (e) {
    expect(e.message).toBe("Não é possível dividir por zero!");
  }
});
