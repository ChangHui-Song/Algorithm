/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numsTable = {};

  for (let num of nums) {
    if (numsTable[num]) numsTable[num] += 1;
    else numsTable[num] = 1;
  }

  const numsArray = Object.entries(numsTable).sort((a, b) => b[1] - a[1]);

  return numsArray.slice(0, k).map((v) => parseInt(v[0]));
};
