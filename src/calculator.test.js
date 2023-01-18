const calculator = require('./calculator');

test('adding', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('subtracting', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
  });

  test('dividing', () => {
    expect(calculator.divide(15,3)).toBe(5);
  });

  test('multiplying', () => {
      expect(calculator.multiply(3,7)).toBe(21)
  })