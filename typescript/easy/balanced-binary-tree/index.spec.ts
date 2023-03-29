import { convertArrayToTree } from '../../utils';
import { isBalanced } from '.';

describe('110. Balanced Binary Tree', () => {
  test('example test 1', () => {
    const input = convertArrayToTree([3, 9, 20, null, null, 15, 7]);
    const output = isBalanced(input);
    const expected = true;
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]);
    const output = isBalanced(input);
    const expected = false;
    expect(output).toEqual(expected);
  });
});
