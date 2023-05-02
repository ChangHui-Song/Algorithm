export function rob(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  if (nums.length <= 2) {
    return Math.max(...nums);
  }

  let rob1 = 0;
  let rob2 = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tmp = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = tmp;
  }

  return rob2;
}
