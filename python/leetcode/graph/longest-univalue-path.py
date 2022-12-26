from typing import Optional


class TreeNode:
    # Definition for a binary tree node.
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    longest: int = 0

    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return 0

            if node.left and node.left.val == node.val:
                left += 1
            else:
                left = 0
            if node.right and node.right.val == node.val:
                right += 1
            else:
                right = 0
            self.longest = max(self.longest, left + right + 2)
            return max(left, right) + 1
        dfs(root)
        return self.longest
