import { convertArrayToTree } from '../../utils';
import { sortedArrayToBST } from '.';

describe('108. Convert Sorted Array to Binary Search Tree', () => {
  test('example test 1', () => {
    const output = sortedArrayToBST([-10, -3, 0, 5, 9]);
    const expected = convertArrayToTree([0, -3, 9, -10, null, 5]);
    expect(output).toEqual(expected);
  });
  test('example test 1', () => {
    const output = sortedArrayToBST([1, 3]);
    const expected = convertArrayToTree([3, 1]);
    expect(output).toEqual(expected);
  });
});
