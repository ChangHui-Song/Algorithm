export function search(nums: number[], target: number): number {
  let [left, right] = [0, nums.length - 1];
  let pivot: number;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  pivot = left;
  [left, right] = [0, nums.length - 1];
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let realMid = (mid + pivot) % nums.length;

    if (nums[realMid] < target) {
      left = mid + 1;
    } else if (nums[realMid] > target) {
      right = mid - 1;
    } else {
      return realMid;
    }
  }

  return -1;
}
