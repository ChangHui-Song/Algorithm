def twoSum(nums, target):
    nums_map = {}
    
    for i, n in enumerate(nums):
        if target - n in nums_map:
            return [nums_map[target - n], i]
        nums_map[n] = i