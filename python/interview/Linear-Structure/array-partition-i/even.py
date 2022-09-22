class Solution:
    def arrayPairSum(self, nums):
        sum = 0
        
        for i, n in enumerate(nums):
            if (i % 2 == 0):
                sum += n
        return (sum)

nums = [1,4,3,2]
print(Solution().arrayPairSum(nums))