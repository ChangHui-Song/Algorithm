import { describe, expect, test } from '@jest/globals';
import { maxProfit } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const output = maxProfit([7, 1, 5, 3, 6, 4]);
    const expected = 5;
    expect(output).toEqual(expected);
  });

  test('example test', () => {
    const output = maxProfit([7, 6, 4, 3, 1]);
    const expected = 0;
    expect(output).toEqual(expected);
  });
});
