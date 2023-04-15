export function intersection(nums1: number[], nums2: number[]): number[] {
  if (!nums1.length || !nums2.length) return [];

  const sortedNums2 = nums2.sort((a, b) => a - b);
  const set = new Set<number>();

  for (let targetNum of nums1) {
    let [left, right] = [0, sortedNums2.length - 1];

    if (set.has(targetNum)) continue;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (sortedNums2[mid] > targetNum) {
        right = mid - 1;
      } else if (sortedNums2[mid] < targetNum) {
        left = mid + 1;
      } else {
        set.add(sortedNums2[mid]);
        break;
      }
    }
  }

  return [...set.values()];
}
