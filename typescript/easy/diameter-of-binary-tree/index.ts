import { convertArrayToTree, TreeNode } from '../../utils';

export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let longest = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return -1;

    let leftSum = dfs(node.left);
    let rightSum = dfs(node.right);
    longest = Math.max(longest, leftSum + rightSum + 2);

    return Math.max(leftSum, rightSum) + 1;
  };
  dfs(root);

  return longest;
}
