const capitalize = require('./capitalize');

test('given "test" returns "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});