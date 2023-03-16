export function combine(n: number, k: number): number[][] {
  const answer: number[][] = [];
  const dfs = (elements: number[], depth: number) => {
    if (elements.length === k) {
      answer.push(elements.slice());
      return;
    }

    for (let i = depth; i < n + 1; i++) {
      elements.push(i);
      dfs(elements, i + 1);
      elements.pop();
    }
  };

  dfs([], 1);
  return answer;
}
