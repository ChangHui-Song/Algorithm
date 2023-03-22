export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const graph = new Map<number, number[][]>();
  const dist = new Array<number>(n).fill(Infinity);
  const queue: number[][] = [];

  for (let [from, to, price] of flights) {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from).push([to, price]);
  }

  queue.push([src, 0, k]);
  dist[src] = 0;

  while (queue.length) {
    const [source, price, rest] = queue.shift();

    if (!graph.has(source)) continue;
    for (let [dest, currentPrice] of graph.get(source)) {
      const nextPrice = price + currentPrice;

      if (dist[dest] > nextPrice && rest >= 0) {
        dist[dest] = nextPrice;
        queue.push([dest, nextPrice, rest - 1]);
      }
    }
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
}
