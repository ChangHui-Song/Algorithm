from typing import List
from collections import deque


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        deq, result = deque(), []

        for i, num in enumerate(nums):
            while deq and nums[deq[-1]] < num:
                deq.pop()

            deq.append(i)

            if deq[0] == i - k:
                deq.popleft()

            if i >= k - 1:
                result.append(nums[deq[0]])

        return result


print(Solution().maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
