/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const dfs = (csum, index, path) => {
    if (csum < 0) return;

    if (csum === 0) {
      result.push(path);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      dfs(csum - candidates[i], i, path.concat(candidates[i]));
    }
  };

  dfs(target, 0, []);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
