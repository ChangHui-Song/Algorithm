from typing import Optional
import collections


# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        queue = collections.deque([root])

        while queue:
            node = queue.popleft()
            if node:
                node.right, node.left = node.left, node.right
                queue.append(node.left)
                queue.append(node.right)
        return root
