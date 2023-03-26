import { TreeNode } from '../../utils';

export function invertTree(root: TreeNode | null): TreeNode | null {
  const stack: TreeNode[] = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      const tmp = node.left;
      node.left = node.right;
      node.right = tmp;

      stack.push(node.left, node.right);
    }
  }

  return root;
}
