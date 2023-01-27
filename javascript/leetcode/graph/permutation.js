/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const prevElements = [];

  const dfs = (elements) => {
    if (elements.length === 0) result.push([...prevElements]);

    for (let element of elements) {
      const nextElements = elements.filter((v) => v !== element);

      prevElements.push(element);
      dfs(nextElements);
      prevElements.pop();
    }
  };

  dfs(nums);
  return result;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
