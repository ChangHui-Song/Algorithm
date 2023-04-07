import { merge } from '.';

describe('56. Merge Intervals', () => {
  test('example test 1', () => {
    const output = merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]);
    const expected = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = merge([
      [1, 4],
      [4, 5],
    ]);
    const expected = [[1, 5]];
    expect(output).toEqual(expected);
  });
});
