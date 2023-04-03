import { convertArrayToTree } from '../../utils';
import { minDiffInBST } from '.';

describe('783. Minimum Distance Between BST Nodes', () => {
  test('example test 1', () => {
    const input = convertArrayToTree([4, 2, 6, 1, 3]);
    const output = minDiffInBST(input);
    const expected = 1;
    expect(output).toBe(expected);
  });

  test('example test 2', () => {
    const input = convertArrayToTree([1, 0, 48, null, null, 12, 49]);
    const output = minDiffInBST(input);
    const expected = 1;
    expect(output).toBe(expected);
  });
});
