import { describe, expect, test } from '@jest/globals';
import { arrayPairSum } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = arrayPairSum([1, 4, 3, 2]);
    const expected = 4;
    expect(output).toEqual(expected);
  });

  test('example test', () => {
    const output = arrayPairSum([6, 2, 6, 5, 1, 2]);
    const expected = 9;
    expect(output).toEqual(expected);
  });
});
