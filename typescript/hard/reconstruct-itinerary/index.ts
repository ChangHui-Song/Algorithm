export function findItinerary(tickets: string[][]): string[] {
  const answer: string[] = [];
  const graph = new Map<string, string[]>();

  tickets = tickets.sort();

  for (let [src, dest] of tickets) {
    if (!graph.has(src)) graph.set(src, []);
    graph.get(src).push(dest);
  }

  const dfs = (src: string) => {
    while (graph.get(src)?.length) {
      dfs(graph.get(src).shift());
    }
    answer.push(src);
  };

  dfs('JFK');
  return answer.reverse();
}
