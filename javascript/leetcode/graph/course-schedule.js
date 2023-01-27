/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let [source, destination] of prerequisites) {
    graph[source].push(destination);
  }

  const traced = new Set();
  const visited = new Set();

  const dfs = (i) => {
    if (traced.has(i)) return false;
    if (visited.has(i)) return true;

    traced.add(i);
    for (let cur of graph[i]) {
      if (!dfs(cur)) return false;
    }
    traced.delete(i);
    visited.add(i);
    return true;
  };

  for (let x of Object.keys(graph)) {
    if (!dfs(x)) return false;
  }
  return true;
};
