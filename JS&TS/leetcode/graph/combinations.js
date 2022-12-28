/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  function dfs(elements, start, k) {
    if (k === 0) {
      result.push([...elements]);
      return;
    }

    for (let i = start; i < n + 1; i++) {
      elements.push(i);
      dfs(elements, i + 1, k - 1);
      elements.pop(i);
    }
  }
  dfs([], 1, k);
  return result;
};
