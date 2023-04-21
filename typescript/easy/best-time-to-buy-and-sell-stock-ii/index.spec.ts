import { maxProfit } from '.';

describe('122. Best Time to Buy and Sell Stock II', () => {
  test('example test 1', () => {
    const output = maxProfit([7, 1, 5, 3, 6, 4]);
    const expected = 7;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = maxProfit([1, 2, 3, 4, 5]);
    const expected = 4;
    expect(output).toEqual(expected);
  });
});
