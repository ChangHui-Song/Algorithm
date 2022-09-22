def twoSum(nums, target):
    for i, n in enumerate(nums):
        compliment = target - n
        
        if compliment in nums[i + 1:]:
            return [nums.index(i), nums[i + 1:].index(compliment) + (i + 1)]