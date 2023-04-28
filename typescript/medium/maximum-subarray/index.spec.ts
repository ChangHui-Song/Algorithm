import { maxSubArray } from '.';

describe('53. Maximum Subarray', () => {
  test('example test 1', () => {
    const output = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    const expected = 6;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = maxSubArray([1]);
    const expected = 1;
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const output = maxSubArray([5, 4, -1, 7, 8]);
    const expected = 23;
    expect(output).toEqual(expected);
  });
});
