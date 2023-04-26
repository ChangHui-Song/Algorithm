import { majorityElement } from '.';

describe('169. Majority Element', () => {
  test('example test 1', () => {
    const output = majorityElement([3, 2, 3]);
    const expected = 3;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = majorityElement([2, 2, 1, 1, 1, 2, 2]);
    const expected = 2;
    expect(output).toEqual(expected);
  });
});
