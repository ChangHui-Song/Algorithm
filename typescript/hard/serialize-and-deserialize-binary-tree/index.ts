import { TreeNode } from '../../utils';

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  if (!root) return null;

  const answer: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const node = queue.shift();

    if (!node) {
      answer.push(null);
      continue;
    }
    queue.push(node.left);
    queue.push(node.right);
    answer.push(node.val);
  }

  return answer.join(' ').trim();
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  if (!data) return null;

  const arrayedTree = data.split(' ');
  const root = new TreeNode(parseInt(arrayedTree.shift()));
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;

    const lValue = arrayedTree.shift();
    const rValue = arrayedTree.shift();

    if (lValue && lValue !== 'null') {
      node.left = new TreeNode(parseInt(lValue));
      queue.push(node.left);
    }
    if (rValue && rValue !== 'null') {
      node.right = new TreeNode(parseInt(rValue));
      queue.push(node.right);
    }
  }

  return root;
}
