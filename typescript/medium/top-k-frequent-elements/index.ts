export function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], freq.get(nums[i]) + 1 || 1);
  }

  const answer = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);

  return answer.slice(0, k).map((element) => Number(element[0]));
}
