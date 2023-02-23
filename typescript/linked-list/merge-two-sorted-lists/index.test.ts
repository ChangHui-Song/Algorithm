import { describe, expect, test } from '@jest/globals';
import { mergeTwoLists, ListNode } from '.';

const convertArrayToList = (array: number[]): ListNode | null => {
  if (!array) return null;

  const head = new ListNode(-1);
  let prev = head;

  for (let i = 0; i < array.length; i++) {
    prev.next = new ListNode(array[i]);
    prev = prev.next;
  }

  return head.next;
};

describe(' description', () => {
  test('example test 1', () => {
    const list1 = convertArrayToList([1, 2, 4]);
    const list2 = convertArrayToList([1, 3, 4]);
    const output = mergeTwoLists(list1, list2);
    const expected = convertArrayToList([1, 1, 2, 3, 4, 4]);
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
    const list2 = convertArrayToList([0]);
    const output = mergeTwoLists(list1, list2);
    const expected = new ListNode(0);
    expect(output).toEqual(expected);
  });
});
