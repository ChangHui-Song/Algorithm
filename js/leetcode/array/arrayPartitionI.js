/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = 0;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i += 2) {
    sum += nums[i];
  }

  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
