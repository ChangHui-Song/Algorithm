import { convertArrayToList, ListNode } from '../utils';
import { mergeKLists } from '.';

describe(' description', () => {
  test('example test', () => {
    const input = [
      convertArrayToList([1, 4, 5]),
      convertArrayToList([1, 3, 4]),
      convertArrayToList([2, 6]),
    ];
    const output = mergeKLists(input);
    const expected = convertArrayToList([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(output).toEqual(expected);
  });
  test('test null lists', () => {
    const input = [];
    const output = mergeKLists(input);
    const expected = convertArrayToList([]);
    expect(output).toEqual(expected);
  });

  test('test empty list', () => {
    const input = [convertArrayToList([])];
    const output = mergeKLists(input);
    const expected = convertArrayToList([]);
    expect(output).toEqual(expected);
  });
});
