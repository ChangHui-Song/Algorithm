/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = new Map();

  tickets = tickets.sort();

  for (let [from, to] of tickets) {
    if (graph.has(from)) graph.get(from).push(to);
    else graph.set(from, [to]);
  }

  const route = [];
  const dfs = (from) => {
    while (graph.get(from)?.length) {
      dfs(graph.get(from).shift());
    }
    route.push(from);
  };
  dfs('JFK');
  return route.reverse();
};
