const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3],
};

const iterativeDfs = (start_v) => {
  const discovered = [];
  const stack = [start_v];

  while (stack.length) {
    let v = stack.pop();
    if (!discovered.find((value) => value === v)) {
      discovered.push(v);
      for (let w of graph[v]) {
        stack.push(w);
      }
    }
  }
  return discovered;
};

const recursiveDfs = (v, discovered = []) => {
  discovered.push(v);
  for (let w of graph[v]) {
    if (!discovered.find((value) => value === w)) {
      discovered = recursiveDfs(w, discovered);
    }
  }
  return discovered;
};

console.log(iterativeDfs(1));
console.log(recursiveDfs(1));
