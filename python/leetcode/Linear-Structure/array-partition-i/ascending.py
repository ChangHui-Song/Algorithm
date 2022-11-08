class Solution:
    def arrayPairSum(self, nums):
        sum = 0
        nums.sort()
        pair = []
        
        for n in nums:
            pair.append(n)
            if (len(pair) == 2):
                sum += min(pair)
                pair = []
        return (sum)

nums = [1,4,3,2]
print(Solution().arrayPairSum(nums))