/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const expected = target - numbers[i];
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (numbers[mid] < expected) {
        left = mid + 1;
      } else if (numbers[mid] > expected) {
        right = mid - 1;
      } else {
        return [i + 1, mid + 1];
      }
    }
  }
};
