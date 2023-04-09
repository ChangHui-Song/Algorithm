import { largestNumber } from '.';

describe('179. Largest Number', () => {
  test('example test 1', () => {
    const output = largestNumber([10, 2]);
    const expected = '210';
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = largestNumber([3, 30, 34, 5, 9]);
    const expected = '9534330';
    expect(output).toEqual(expected);
  });
});
