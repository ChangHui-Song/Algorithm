// 홀수 짝수를 판별하는 문제
function solution(num) {
  let answer = '';

  if (num % 2 === 0) {
    answer = 'Even';
  } else {
    answer = 'Odd';
  }
  return answer;
}

// best solution
function bestSolution(num) {
  return num % 2 ? 'Odd' : 'Even';
}
