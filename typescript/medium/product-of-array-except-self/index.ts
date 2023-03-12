export function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  let p = 1;

  for (let i = 0; i < nums.length; i++) {
    result.push(p);
    p = p * nums[i];
  }

  p = 1;
  for (let i = nums.length - 1; i > 0 - 1; i--) {
    result[i] = result[i] * p;
    p = p * nums[i];
  }

  return result;
}
