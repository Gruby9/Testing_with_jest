const reverseString = require('./reverseString');

test('given "test" returns "tset"', () => {
  expect(reverseString('test')).toBe('tset');
});