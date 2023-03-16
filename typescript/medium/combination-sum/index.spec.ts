import { combinationSum } from '.';

describe('39. Combination Sum', () => {
  test('example test 1', () => {
    const output = combinationSum([2, 3, 6, 7], 7);
    const expected = [[7], [2, 2, 3]];
    expect(output).toEqual(expect.arrayContaining(expected));
  });
  test('example test 1', () => {
    const output = combinationSum([2, 3, 5], 8);
    const expected = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ];
    expect(output).toEqual(expect.arrayContaining(expected));
  });
  test('example test 1', () => {
    const output = combinationSum([2], 1);
    const expected = [];
    expect(output).toEqual(expected);
  });
});
