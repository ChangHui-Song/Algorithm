/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObj[target - nums[i]] >= 0) return [numsObj[target - nums[i]], i];
    numsObj[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
