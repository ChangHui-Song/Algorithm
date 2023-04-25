import { findContentChildren } from '.';

describe('455. Assign Cookies', () => {
  test('example test 1', () => {
    const output = findContentChildren([1, 2, 3], [1, 1]);
    const expected = 1;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = findContentChildren([1, 2], [1, 2, 3]);
    const expected = 2;
    expect(output).toEqual(expected);
  });
});
