// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) return '';
  const queue: (TreeNode | null)[] = [root];
  const result: (string | null)[] = [];

  while (queue.length !== 0) {
    const node = queue.shift();

    if (!node) {
      result.push(null);
      continue;
    }
    queue.push(node.left);
    queue.push(node.right);
    result.push(String(node.val));
  }

  return result.join(' ');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data.length === 0) return null;

  const nodes = data.split(' ');
  const root = new TreeNode(parseInt(nodes[0]));
  const queue: TreeNode[] = [root];

  let index = 1;
  while (queue.length !== 0) {
    const node = queue.shift();
    if (!node) continue;

    if (nodes[index] && nodes[index] !== 'null') {
      node.left = new TreeNode(parseInt(nodes[index]));
      queue.push(node.left);
    }
    index++;

    if (nodes[index] && nodes[index] !== 'null') {
      node.right = new TreeNode(parseInt(nodes[index]));
      queue.push(node.right);
    }
    index++;
  }
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

console.log(deserialize('1 2 3 null null 4 5')?.val);
