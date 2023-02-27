import { describe, expect, test } from '@jest/globals';
import { oddEvenList } from '.';
import { convertArrayToList } from '../utils';

describe(' description', () => {
  test('example test 1', () => {
    const input = convertArrayToList([1, 2, 3, 4, 5]);
    const output = oddEvenList(input);
    const expected = convertArrayToList([1, 3, 5, 2, 4]);
    expect(output).toEqual(expected);
  });

  test('example test 1', () => {
    const input = convertArrayToList([2, 1, 3, 5, 6, 4, 7]);
    const output = oddEvenList(input);
    const expected = convertArrayToList([2, 3, 6, 7, 1, 5, 4]);
    expect(output).toEqual(expected);
  });
});
