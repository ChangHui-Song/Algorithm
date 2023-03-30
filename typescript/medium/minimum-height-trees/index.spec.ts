import { findMinHeightTrees } from '.';

describe('310. Minimum Height Trees', () => {
  test('example test 1', () => {
    const output = findMinHeightTrees(4, [
      [1, 0],
      [1, 2],
      [1, 3],
    ]);
    const expected = [1];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = findMinHeightTrees(6, [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 4],
      [5, 4],
    ]);
    const expected = [3, 4];
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const output = findMinHeightTrees(1, []);
    const expected = [0];
    expect(output).toEqual(expected);
  });
});
