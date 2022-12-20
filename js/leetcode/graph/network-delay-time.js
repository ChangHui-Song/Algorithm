/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let result = 0;
  const graph = {};
  const dist = new Array(n + 1).fill(Infinity);
  const que = [];

  for (let [u, v, w] of times) {
    if (graph[u]) graph[u].push([v, w]);
    else graph[u] = [[v, w]];
  }

  que.push([k, 0]);
  dist[k] = 0;
  dist[0] = 0;

  while (que.length) {
    let [v, w] = que.shift();

    if (!graph[v]) continue;
    for (let current of graph[v]) {
      let [nextV, nextW] = current;

      if (dist[nextV] > dist[v] + nextW) {
        dist[nextV] = dist[v] + nextW;
        que.push([nextV, nextW]);
      }
    }
  }

  for (let time of dist) {
    if (time === Infinity) return -1;
    result = time > result ? time : result;
  }

  return result;
};

console.log(
  networkDelayTime(
    [
      [3, 1, 5],
      [3, 2, 2],
      [2, 1, 2],
      [3, 4, 1],
      [4, 5, 1],
      [5, 6, 1],
      [6, 7, 1],
      [7, 8, 1],
      [8, 1, 1],
    ],
    8,
    3
  )
);
