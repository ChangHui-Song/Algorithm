import { describe, expect, test } from '@jest/globals';
import { mergeTwoLists, ListNode } from '.';

describe(' description', () => {
  test('example test 1', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const output = mergeTwoLists(list1, list2);
    const expected = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    );
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const list1 = null;
    const list2 = null;
    const output = mergeTwoLists(list1, list2);
    const expected = null;
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const list1 = null;
    const list2 = new ListNode(0);
    const output = mergeTwoLists(list1, list2);
    const expected = new ListNode(0);
    expect(output).toEqual(expected);
  });
});
