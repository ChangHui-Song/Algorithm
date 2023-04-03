import { TreeNode } from '../../utils';

export function minDiffInBST(root: TreeNode | null): number {
  let answer = Infinity;
  let prev = -Infinity;

  const helper = (node: TreeNode): number => {
    if (node.left) helper(node.left);
    answer = Math.min(answer, node.val - prev);
    prev = node.val;
    if (node.right) helper(node.right);

    return answer;
  };

  return helper(root);
}
