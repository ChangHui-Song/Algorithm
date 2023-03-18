export function subsets(nums: number[]): number[][] {
  const answer: number[][] = [[]];
  const dfs = (comb: number[], depth: number): void => {
    for (let i = depth; i < nums.length; i++) {
      comb.push(nums[i]);
      dfs(comb, i + 1);
      answer.push([...comb]);
      comb.pop();
    }
  };

  dfs([], 0);
  return answer;
}
