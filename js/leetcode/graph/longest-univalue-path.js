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
var longestUnivaluePath = function (root) {
  let longest = 0;
  const dfs = (node) => {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (node.left && node.left.val === node.val) left++;
    else left = 0;
    if (node.right && node.right.val === node.val) right++;
    else right = 0;

    longest = Math.max(longest, left + right);
    return Math.max(left, right);
  };

  dfs(root);
  return longest;
};
