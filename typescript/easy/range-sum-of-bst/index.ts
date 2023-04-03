import { TreeNode } from '../../utils';

export function rangeSumBST(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  let answer = 0;

  if (root.val >= low && root.val <= high) {
    answer += root.val;
  }
  if (root.left && root.val > low) {
    answer += rangeSumBST(root.left, low, high);
  }
  if (root.right && root.val < high) {
    answer += rangeSumBST(root.right, low, high);
  }

  return answer;
}
