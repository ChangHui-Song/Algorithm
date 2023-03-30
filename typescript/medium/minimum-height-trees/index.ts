export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n <= 1) return [0];
  const graph = new Map<number, number[]>();

  for (const [left, right] of edges) {
    const leftNeighbors = graph.get(left) ?? [];
    const rightNeighbors = graph.get(right) ?? [];
    leftNeighbors.push(right);
    rightNeighbors.push(left);
    graph.set(left, leftNeighbors);
    graph.set(right, rightNeighbors);
  }

  let leaves: number[] = [];
  for (let i = 0; i < n + 1; i++) {
    if (graph.get(i)?.length === 1) leaves.push(i);
  }

  while (n > 2) {
    n -= leaves.length;
    let newLeaves: number[] = [];

    leaves.forEach((leaf) => {
      let neighbor = graph.get(leaf)?.pop() ?? Infinity;
      graph.set(neighbor, graph.get(neighbor)?.filter((n) => n !== leaf) ?? []);
      if (graph.get(neighbor)?.length === 1) newLeaves.push(neighbor);
    });

    leaves = newLeaves;
  }

  return leaves;
}
