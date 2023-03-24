import { TreeNode } from '../../utils';

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let answer = 0;
  const queue: TreeNode[] = [root];

  while (queue.length) {
    answer++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const subRoot = queue.shift();
      if (subRoot.left != null) queue.push(subRoot.left);
      if (subRoot.right != null) queue.push(subRoot.right);
    }
  }
  return answer;
}
