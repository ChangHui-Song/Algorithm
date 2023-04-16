import { twoSum } from '.';

describe('167. Two Sum II - Input Array Is Sorted', () => {
  test('example test 1', () => {
    const output = twoSum([2, 7, 11, 15], 9);
    const expected = [1, 2];
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = twoSum([2, 3, 4], 6);
    const expected = [1, 3];
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const output = twoSum([-1, 0], -1);
    const expected = [1, 2];
    expect(output).toEqual(expected);
  });
});
