import { rob } from '.';

describe('198. House Robber', () => {
  test('example test 1', () => {
    const output = rob([1, 2, 3, 1]);
    const expected = 4;
    expect(output).toEqual(expected);
  });

  test('example test 1', () => {
    const output = rob([2, 7, 9, 3, 1]);
    const expected = 12;
    expect(output).toEqual(expected);
  });
});
