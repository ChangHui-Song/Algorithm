export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const graph = new Map<number, number[]>();
  const traced = new Set<number>();
  const visited = new Set<number>();

  for (let [src, dst] of prerequisites) {
    if (!graph.has(src)) graph.set(src, []);
    graph.get(src).push(dst);
  }

  const dfs = (src: number): boolean => {
    if (traced.has(src)) return false;
    if (visited.has(src)) return true;

    traced.add(src);
    for (let dst of graph.get(src) || []) {
      if (!dfs(dst)) return false;
    }
    traced.delete(src);
    visited.add(src);
    return true;
  };

  for (let key of graph.keys()) {
    if (!dfs(key)) return false;
  }

  return true;
}
