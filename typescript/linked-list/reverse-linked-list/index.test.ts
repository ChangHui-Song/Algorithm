import { describe, expect, test } from '@jest/globals';
import { reverseList } from '.';
import { convertArrayToList } from '../utils';

describe(' description', () => {
  test('example test 1', () => {
    const input = convertArrayToList([1, 2, 3, 4, 5]);
    const output = reverseList(input);
    const expected = convertArrayToList([5, 4, 3, 2, 1]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToList([1, 2]);
    const output = reverseList(input);
    const expected = convertArrayToList([2, 1]);
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const input = convertArrayToList([]);
    const output = reverseList(input);
    const expected = convertArrayToList([]);
    expect(output).toEqual(expected);
  });
});
