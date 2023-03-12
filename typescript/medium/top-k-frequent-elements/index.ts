export function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let current = freq.get(nums[i]);
    if (!current) current = 0;
    freq.set(nums[i], current + 1);
  }

  const answer = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);

  return answer.slice(0, k).map((element) => Number(element[0]));
}
