import { describe, expect, test } from '@jest/globals';
import { threeSum } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = threeSum([-1, 0, 1, 2, -1, -4]);
    const expected = [
      expect.arrayContaining([-1, -1, 2]),
      expect.arrayContaining([-1, 0, 1]),
    ];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = threeSum([0, 1, 1]);
    const expected = [];

    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const output = threeSum([0, 0, 0]);
    const expected = [[0, 0, 0]];
    expect(output).toEqual(expected);
  });
});
