const swap = (num1: number, num2: number) => {
  return [num2, num1];
};

/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
  let red = 0;
  let white = 0;
  let blue = nums.length;

  while (white < blue) {
    if (nums[white] < 1) {
      [nums[red], nums[white]] = swap(nums[red], nums[white]);
      red++;
      white++;
    } else if (nums[white] > 1) {
      blue--;
      [nums[white], nums[blue]] = swap(nums[white], nums[blue]);
    } else {
      white++;
    }
  }
}
