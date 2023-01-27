function solution(arr) {
  let min = arr.splice(arr.indexOf(Math.min(...arr)), 1)[0];
  while (arr.indexOf(min) !== -1) {
    arr.splice(arr.indexOf(min), 1);
  }
  return arr.length ? arr : [-1];
}

// console.log(solution([4, 3, 2, 1]));
// console.log(solution([10]));
console.log(solution([1, 1, 4, 2]));
