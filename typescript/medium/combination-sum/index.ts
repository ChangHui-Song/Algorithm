export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const answer: number[][] = [];
  const dfs = (elements: number[], sum: number, depth: number) => {
    if (sum < 0) {
      return;
    }
    if (sum === 0) {
      answer.push([...elements]);
      return;
    }

    for (let i = depth; i < candidates.length; i++) {
      elements.push(candidates[i]);
      dfs(elements, sum - candidates[i], i);
      elements.pop();
    }
  };

  dfs([], target, 0);

  return answer;
}
