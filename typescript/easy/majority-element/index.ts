export function majorityElement(nums: number[]): number {
  const memory = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    memory.set(nums[i], (memory.get(nums[i]) ?? 0) + 1);
    if (memory.get(nums[i]) > nums.length / 2) {
      return nums[i];
    }
  }
}
