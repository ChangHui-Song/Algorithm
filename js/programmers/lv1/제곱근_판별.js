function solution(n) {
  let sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt) ? (sqrt + 1) ** 2 : -1;
}

console.log(solution(121));
