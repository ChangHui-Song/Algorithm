import { combine } from '.';

describe('77. Combinations', () => {
  test('example test 1', () => {
    const output = combine(4, 2);
    const expected = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ];
    expect(output).toEqual(expect.arrayContaining(expected));
  });
  test('example test 2', () => {
    const output = combine(1, 1);
    const expected = [[1]];
    expect(output).toEqual(expect.arrayContaining(expected));
  });
});
