function solution(x, n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(x * (i + 1));
  }
  return answer;
}

function anotherSolution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

console.log(anotherSolution(2, 5));
