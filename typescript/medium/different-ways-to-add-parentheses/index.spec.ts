import { diffWaysToCompute } from '.';

describe('241. Different Ways to Add Parentheses', () => {
  test('example test 1', () => {
    const output = diffWaysToCompute('2-1-1');
    const expected = expect.arrayContaining([0, 2]);
    expect(output).toEqual(expected);
  });

  test('example test 1', () => {
    const output = diffWaysToCompute('2*3-4*5');
    const expected = expect.arrayContaining([-34, -14, -10, -10, 10]);
    expect(output).toEqual(expected);
  });
});
