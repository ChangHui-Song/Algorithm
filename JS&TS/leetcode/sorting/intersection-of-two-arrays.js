const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return nums[mid];
    }
  }
  return null;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = {};

  const sortedNums2 = nums2.sort((a, b) => a - b);

  for (let n1 of nums1) {
    let n2 = binarySearch(sortedNums2, n1);
    if (n2 !== null && n1 === n2) {
      if (!result[n2]) result[n2] = 0;
      result[n2]++;
    }
  }
  return Object.keys(result).sort((a, b) => b - a);
};
