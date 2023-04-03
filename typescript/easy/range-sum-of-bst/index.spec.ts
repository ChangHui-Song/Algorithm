import { convertArrayToTree } from '../../utils';
import { rangeSumBST } from '.';

describe('938. Range Sum of BST', () => {
  test('example test 1', () => {
    const input = convertArrayToTree([10, 5, 15, 3, 7, null, 18]);
    const output = rangeSumBST(input, 7, 15);
    const expected = 32;
    expect(output).toEqual(expected);
  });

  test('example test 1', () => {
    const input = convertArrayToTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]);
    const output = rangeSumBST(input, 6, 10);
    const expected = 23;
    expect(output).toEqual(expected);
  });
});
