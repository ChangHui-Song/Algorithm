import { TreeNode } from '../../utils';

export function longestUnivaluePath(root: TreeNode | null): number {
  if (!root) return 0;
  let answer = 0;

  const dfs = (node: TreeNode): number => {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (node.left && node.left.val === node.val) left++;
    else left = 0;
    if (node.right && node.right.val === node.val) right++;
    else right = 0;

    answer = Math.max(answer, left + right);
    return Math.max(left, right);
  };

  dfs(root);

  return answer;
}
