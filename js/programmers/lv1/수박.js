function solution(n) {
  let string = '수박';
  let answer = string.repeat(Math.floor(n / 2));

  return n % 2 ? answer + '수' : answer;
}

function bestSolution(n) {
  return '수박'.repeat(Math.floor(n / 2)) + (n % 2 ? '수' : '');
}

console.log(bestSolution(4));
console.log(bestSolution(5));
