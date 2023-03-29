import { TreeNode } from '../../utils';

export function isBalanced(root: TreeNode | null): boolean {
  const check = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = check(node.left) + 1;
    const right = check(node.right) + 1;

    if (Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right);
  };

  return check(root) !== Infinity;
}
