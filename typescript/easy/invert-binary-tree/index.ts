import { TreeNode } from '../../utils';

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const { left, right } = root;

  root.right = invertTree(left);
  root.left = invertTree(right);

  return root;
}
