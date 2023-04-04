import { TreeNode } from '../../utils';

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!preorder.length) return null;

  const index = inorder.indexOf(preorder[0]);
  const node = new TreeNode(preorder[0]);
  node.left = buildTree(
    preorder.slice(1, index + 1),
    inorder.slice(0, index + 1)
  );
  node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return node;
}
