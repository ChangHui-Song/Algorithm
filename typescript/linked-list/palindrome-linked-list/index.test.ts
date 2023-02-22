import { describe, expect, test } from '@jest/globals';
import { isPalindrome, ListNode } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const input = new ListNode(
      1,
      new ListNode(2, new ListNode(2, new ListNode(1)))
    );
    const output = isPalindrome(input);
    const expected = true;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = new ListNode(1, new ListNode(2));
    const output = isPalindrome(input);
    const expected = false;
    expect(output).toEqual(expected);
  });
});
