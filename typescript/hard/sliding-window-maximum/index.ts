export function maxSlidingWindow(nums: number[], k: number): number[] {
  const results: number[] = [];
  const current: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (current.length && nums[current.at(-1)] < nums[i]) {
      current.pop();
    }

    current.push(i);

    if (current[0] === i - k) {
      current.shift();
    }

    if (i >= k - 1) {
      results.push(nums[current[0]]);
    }
  }

  return results;
}
