import { describe, expect, test } from '@jest/globals';
import { productExceptSelf } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = productExceptSelf([1, 2, 3, 4]);
    const expected = [24, 12, 8, 6];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = productExceptSelf([-1, 1, 0, -3, 3]);
    const expected = [0, 0, 9, 0, 0];
    output.forEach((num, i) => expect(num).toBeCloseTo(expected[i]));
  });
});
