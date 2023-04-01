import { TreeNode } from '../../utils';

export function bstToGst(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let total = 0;

  const helper = (node: TreeNode): void => {
    if (!node) return;

    helper(node.right);
    total += node.val;
    node.val = total;
    helper(node.left);
  };

  helper(root);
  return root;
}
