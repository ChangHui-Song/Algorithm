function solution(num) {
  let answer = 0;

  while (num !== 1 && answer < 500) {
    answer++;
    if (num % 2) {
      num = num * 3 + 1;
      continue;
    }
    num = Math.floor(num / 2);
  }
  return answer === 500 ? -1 : answer;
}

// best solution
function bestSolution(num) {
  let answer = 0;

  while (num !== 1 && answer < 500) {
    num % 2 ? (num = num * 3 + 1) : (num = Math.floor(num / 2));
    answer++;
  }
  return answer === 500 ? -1 : answer;
}

console.log(bestSolution(6));
