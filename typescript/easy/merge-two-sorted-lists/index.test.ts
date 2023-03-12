import { describe, expect, test } from '@jest/globals';
import { mergeTwoLists } from '.';
import { convertArrayToList, ListNode } from '../../utils';

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
