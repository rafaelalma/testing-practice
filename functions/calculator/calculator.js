const calculator = (() => {
  const add = (a, b) => Number.parseFloat(a) + Number.parseFloat(b);
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Can't divide by zero!");
    }
    return a / b;
  };

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

export default calculator;
