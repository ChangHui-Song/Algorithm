/**
 * @param {number[]} height
 * @return {number}
 */
var trap1 = function (height) {
  if (!height.length) return 0;

  let volume = 0;
  let [left, right] = [0, height.length - 1];
  let [leftMax, rightMax] = [height[left], height[right]];

  while (left < right) {
    [leftMax, rightMax] = [
      Math.max(height[left], leftMax),
      Math.max(height[right], rightMax),
    ];

    if (leftMax <= rightMax) {
      volume += leftMax - height[left];
      left++;
    } else {
      volume += rightMax - height[right];
      right--;
    }
  }
  return volume;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0;

  const stack = [];
  let volume = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();

      if (!stack.length) break;

      const distance = i - stack[stack.length - 1] - 1;
      const waters =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[top];

      volume += distance * waters;
    }
    stack.push(i);
  }
  return volume;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
