import { describe, expect, test } from '@jest/globals';
import { isPalindrome } from '.';
import { ListNode, convertArrayToList } from '../utils';

describe(' description', () => {
  test('example test 1', () => {
    const input = convertArrayToList([1, 2, 2, 1]);
    const output = isPalindrome(input);
    const expected = true;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToList([1, 2]);
    const output = isPalindrome(input);
    const expected = false;
    expect(output).toEqual(expected);
  });
});
