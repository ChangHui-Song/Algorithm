/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 0) return null;

  if (nums.length === 1) return nums[0];

  const half = Math.floor(nums.length / 2);
  const left = majorityElement(nums.slice(0, half));
  const right = majorityElement(nums.slice(half));

  const leftFilterOfNums = nums.filter((num) => num === left);
  const majorityIndex = leftFilterOfNums.length > half ? 1 : 0;
  return [right, left][majorityIndex];
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
