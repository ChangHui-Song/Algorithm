from typing import List


class Solution:
    def majorityElement(self, nums: List[int]):
        if not nums:
            return
        length = len(nums)

        if length == 1:
            return nums[0]

        a = self.majorityElement(nums[: length // 2])
        b = self.majorityElement(nums[length // 2 :])

        print(nums)
        print(nums.count(a))
        return [b, a][nums.count(a) > length // 2]


print(Solution().majorityElement([2, 2, 1, 1, 1, 2, 2]))
