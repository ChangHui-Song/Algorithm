function solution(n) {
  let answer = [];
  let cur = n;
  while (cur > 0) {
    answer.push(Math.floor(cur % 10));
    cur = Math.floor(cur / 10);
  }
  return answer;
}

console.log(solution(12345));
