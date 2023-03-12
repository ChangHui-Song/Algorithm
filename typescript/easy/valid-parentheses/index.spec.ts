import { isValid } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = isValid('()[]{}');
    expect(output).toBe(true);
  });

  test('example test 1', () => {
    const output = isValid('()');
    expect(output).toBe(true);
  });

  test('example test 1', () => {
    const output = isValid('(]');
    expect(output).toBe(false);
  });
});
