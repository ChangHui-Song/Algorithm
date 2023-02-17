export function trap(height: number[]): number {
  let answer = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (leftMax <= rightMax) {
      answer += leftMax - height[left];
      left++;
    } else {
      answer += rightMax - height[right];
      right--;
    }
  }

  return answer;
}
