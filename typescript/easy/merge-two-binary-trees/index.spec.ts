import { convertArrayToTree } from '../../utils';
import { mergeTrees } from '.';

describe('617. Merge Two Binary Trees', () => {
  test('example test 1', () => {
    const root1 = convertArrayToTree([1, 3, 2, 5]);
    const root2 = convertArrayToTree([2, 1, 3, null, 4, null, 7]);
    const output = mergeTrees(root1, root2);
    const expected = convertArrayToTree([3, 4, 5, 5, 4, null, 7]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const root1 = convertArrayToTree([1]);
    const root2 = convertArrayToTree([1, 2]);
    const output = mergeTrees(root1, root2);
    const expected = convertArrayToTree([2, 2]);
    expect(output).toEqual(expected);
  });
});
