import { describe, expect, test } from '@jest/globals';
import { swapPairs } from '.';
import { convertArrayToList } from '../../utils';

describe(' description', () => {
  test('example test 1', () => {
    const input = convertArrayToList([1, 2, 3, 4]);
    const output = swapPairs(input);
    const expected = convertArrayToList([2, 1, 4, 3]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = null;
    const output = swapPairs(input);
    const expected = null;
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const input = convertArrayToList([1]);
    const output = swapPairs(input);
    const expected = convertArrayToList([1]);
    expect(output).toEqual(expected);
  });
});
