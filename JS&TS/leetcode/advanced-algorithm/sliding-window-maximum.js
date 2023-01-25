/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const current = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (current && nums[current.at(-1)] < nums[i]) {
      current.pop();
    }

    current.push(i);

    if (current[0] === i - k) {
      current.shift();
    }

    if (i >= k - 1) {
      result.push(nums[current[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
