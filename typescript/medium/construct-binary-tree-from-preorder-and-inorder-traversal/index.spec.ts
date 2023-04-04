import { convertArrayToTree } from '../../utils';
import { buildTree } from '.';

describe('105. Construct Binary Tree from Preorder and Inorder Traversal', () => {
  test('example test 1', () => {
    const output = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
    const expected = convertArrayToTree([3, 9, 20, null, null, 15, 7]);
    expect(output).toEqual(expected);
  });

  test('example test 2', () => {
    const output = buildTree([-1], [-1]);
    const expected = convertArrayToTree([-1]);
    expect(output).toEqual(expected);
  });
});
