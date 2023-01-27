// Definition for a binary tree node.

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  if (!root) return null;

  let total = 0;

  const sumNodeValue = (node) => {
    if (!node) return null;

    sumNodeValue(node.right);
    total += node.val;
    node.val = total;
    sumNodeValue(node.left);

    return node;
  };

  sumNodeValue(root);
  return root;
};
