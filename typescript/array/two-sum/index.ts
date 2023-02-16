export function twoSum(nums: number[], target: number): number[] {
  const numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObj[target - nums[i]] >= 0) return [numsObj[target - nums[i]], i];
    numsObj[nums[i]] = i;
  }
}
