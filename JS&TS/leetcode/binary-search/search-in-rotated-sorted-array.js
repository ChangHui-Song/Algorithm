/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const pivot = left;
  left = 0;
  right = nums.length;

  while (left <= right) {
    const mid = left + Math.round((right - left) / 2);
    const midPivot = (mid + pivot) % nums.length;

    if (nums[midPivot] < target) {
      left = mid + 1;
    } else if (nums[midPivot] > target) {
      right = mid - 1;
    } else {
      return midPivot;
    }
  }

  return -1;
};

search([4, 5, 6, 7, 0, 1, 2], 0);
