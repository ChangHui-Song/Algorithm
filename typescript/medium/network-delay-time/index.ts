export function networkDelayTime(
  times: number[][],
  n: number,
  k: number
): number {
  let answer = 0;

  const graph = new Map<number, number[][]>();
  const dist = new Array<number>(n + 1).fill(Infinity);
  const que: number[][] = [];

  for (let [u, v, w] of times) {
    if (!graph.has(u)) graph.set(u, []);
    graph.get(u).push([v, w]);
  }

  que.push([k, 0]);
  dist[k] = 0;
  dist[0] = 0;

  while (que.length) {
    let [v, w] = que.shift();

    if (!graph.has(v)) continue;
    for (let current of graph.get(v)) {
      let [nextV, nextW] = current;

      if (dist[nextV] > dist[v] + nextW) {
        dist[nextV] = dist[v] + nextW;
        que.push([nextV, nextW]);
      }
    }
  }

  for (let time of dist) {
    if (time === Infinity) return -1;
    answer = time > answer ? time : answer;
  }

  return answer;
}
