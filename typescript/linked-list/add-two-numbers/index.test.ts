import { describe, expect, test } from '@jest/globals';
import { addTwoNumbers } from '.';
import { convertArrayToList } from '../utils';

describe(' description', () => {
  test('example test 1', () => {
    const l1 = convertArrayToList([2, 4, 3]);
    const l2 = convertArrayToList([5, 6, 4]);
    const output = addTwoNumbers(l1, l2);
    const expected = convertArrayToList([7, 0, 8]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const l1 = convertArrayToList([0]);
    const l2 = convertArrayToList([0]);
    const output = addTwoNumbers(l1, l2);
    const expected = convertArrayToList([0]);
    expect(output).toEqual(expected);
  });

  test('example test 3', () => {
    const l1 = convertArrayToList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = convertArrayToList([9, 9, 9, 9]);
    const output = addTwoNumbers(l1, l2);
    const expected = convertArrayToList([8, 9, 9, 9, 0, 0, 0, 1]);
    expect(output).toEqual(expected);
  });
});
