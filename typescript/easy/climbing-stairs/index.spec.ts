import { climbStairs } from '.';

describe('70. Climbing Stairs', () => {
  test('example test 1', () => {
    const output = climbStairs(2);
    const expected = 2;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = climbStairs(3);
    const expected = 3;
    expect(output).toEqual(expected);
  });

  test('example test 4', () => {
    const output = climbStairs(4);
    const expected = 5;
    expect(output).toEqual(expected);
  });
});
