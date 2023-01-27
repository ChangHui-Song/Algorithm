function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n <= 1) return [0];

  const graph = new Map<number, number[]>();

  for (let [i, j] of edges) {
    if (!graph.has(i)) graph.set(i, []);
    if (!graph.has(j)) graph.set(j, []);
    graph.get(i)!.push(j);
    graph.get(j)!.push(i);
  }

  let leaves: number[] = [];
  for (let i = 0; i < n + 1; i++) {
    if (graph.has(i) && graph.get(i)!.length! === 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    n -= leaves.length;
    let newLeaves: number[] = [];

    leaves.forEach((leaf) => {
      let neighbor = graph.get(leaf)!.pop()!;
      graph.set(
        neighbor,
        graph.get(neighbor)!.filter((n) => n !== leaf)
      );
      if (graph.get(neighbor)!.length! === 1) newLeaves.push(neighbor);
    });

    leaves = newLeaves;
  }

  return leaves;
}

console.log(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
);
console.log(
  findMinHeightTrees(5, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ])
);

console.log(
  findMinHeightTrees(10, [
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [6, 10],
    [5, 7],
    [5, 8],
    [8, 9],
  ])
);
