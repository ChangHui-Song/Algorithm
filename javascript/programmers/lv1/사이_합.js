function solution(a, b) {
  if (a === b) {
    return a;
  }
  let numArr = Array(a < b ? b - a + 1 : a - b + 1)
    .fill(a < b ? a : b)
    .map((value, index) => value + index);
  return numArr.reduce((acc, num) => (acc += num), 0);
}

// best solution
function bestSolution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
