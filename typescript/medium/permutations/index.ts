const swap = (elements: number[], i: number, j: number): void => {
  const tmp = elements[i];
  elements[i] = elements[j];
  elements[j] = tmp;
};

export function permute(nums: number[]): number[][] {
  const answer: number[][] = [];

  const dfs = (arr: number[], depth: number): void => {
    if (depth === nums.length - 1) {
      answer.push([...arr]);
      return;
    }

    for (let i = depth; i < nums.length; i++) {
      swap(arr, depth, i);
      dfs(arr, depth + 1);
      swap(arr, depth, i);
    }
  };

  dfs([...nums], 0);

  return answer;
}
