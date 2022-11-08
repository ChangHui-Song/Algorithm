def threeSum(nums):
    answer = []

    nums.sort()
    for i in range(len(nums)):
        if (i > 0 and nums[i] == nums[i - 1]):
            continue
        for j in range(i + 1, len(nums)):
            for k in range(j + 1, len(nums)):
                if (nums[i] + nums[j] + nums[k] == 0):
                    answer.append([nums[i], nums[j], nums[k]])
    return answer

nums = [-1,0,1,2,-1,-4]
print(threeSum(nums))