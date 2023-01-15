var toSwap = (num1, num2) =>
  String(num1) + String(num2) < String(num2) + String(num1);

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let i = 1;

  while (i < nums.length) {
    let j = i;

    while (j > 0 && toSwap(nums[j - 1], nums[j])) {
      const tmp = nums[j - 1];
      nums[j - 1] = nums[j];
      nums[j] = tmp;
      j--;
    }
    i++;
  }
  return String(
    BigInt(nums.reduce((totalnum, num) => totalnum + String(num), ''))
  );
};
