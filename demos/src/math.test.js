const {sum, multiply, divide} = require('./02-math');

test('adds', () => {
  expect(sum(1, 3)).toBe(4);
});

test('multiplies', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('devides', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(10, 1)).toBe(10);
  expect(divide(-10, 2)).toBe(-5);
  expect(divide(10, 0)).toBeNull();
});

