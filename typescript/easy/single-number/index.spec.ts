import { singleNumber } from '.';

describe('136. Single Number', () => {
  test('example test 1', () => {
    const output = singleNumber([2, 2, 1]);
    const expected = 1;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = singleNumber([4, 1, 2, 1, 2]);
    const expected = 4;
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const output = singleNumber([1]);
    const expected = 1;
    expect(output).toEqual(expected);
  });
});
