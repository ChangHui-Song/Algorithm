// my solution
function solution(n) {
  let answer = 0;
  let current = n;

  while (current > 0) {
    answer += Math.floor(current % 10);
    current = current / 10;
  }
  return answer;
}

// another solution
function anotherSolution(n) {
  let answer = 0;

  String(n)
    .split('')
    .map((letter) => (answer += parseInt(letter)));
  return answer;
}

console.log(bestSolution(123));
