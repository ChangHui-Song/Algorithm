"""
leetcode permutation 20221214
"""
import itertools
from typing import List


class Solution:
    """
    :param {None}
    :return {None}
    """

    def permute(self, nums: List[int]) -> List[List[int]]:
        """
        :param {self, List[int]}
        :return {List[List[int]]}
        """
        return list(map(list, itertools.permutations(nums)))


print(Solution().permute([1, 2, 3]))
print(Solution().permute([0, 1]))
print(Solution().permute([1]))
