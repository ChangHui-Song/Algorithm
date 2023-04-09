const isSwap = (num1: number, num2: number): boolean => {
  return String(num1) + String(num2) < String(num2) + String(num1);
};

export function largestNumber(nums: number[]): string {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && isSwap(nums[j - 1], nums[j])) {
      const tmp = nums[j - 1];
      nums[j - 1] = nums[j];
      nums[j] = tmp;
      j--;
    }
  }
  return String(BigInt(nums.reduce((a, c) => a + String(c), '')));
}
