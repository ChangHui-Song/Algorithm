function solution(n, left, right) {
  let answer = [];

  for (let i = left; i < right + 1; i++) {
    const div = Math.floor(i / n);
    const rem = i % n;
    answer.push(div >= rem ? div + 1 : rem + 1);
  }
  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
