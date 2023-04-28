export function maxSubArray(nums: number[]): number {
  let result = nums[0];
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    result = Math.max(result, current);
    if (current < 0) {
      current = 0;
    }
  }

  return result;
}
