/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let prev = -Infinity;
  let result = Infinity;

  const inorder = (node) => {
    if (node.left) inorder(node.left);

    if (result > node.val - prev) result = node.val - prev;
    prev = node.val;

    if (node.right) inorder(node.right);

    return result;
  };

  return inorder(root);
};
