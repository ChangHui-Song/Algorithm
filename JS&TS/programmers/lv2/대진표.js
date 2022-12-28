function solution(n, a, b) {
  let answer = 1;
  let left = Math.min(a, b);
  let right = Math.max(a, b);

  while ((!(left % 2) && right % 2) || left + 1 !== right) {
    if (left !== 1) {
      left = left % 2 ? Math.floor(left / 2) + 1 : left / 2;
    }
    right = right % 2 ? Math.floor(right / 2) + 1 : right / 2;
    answer++;
  }

  return answer;
}

function bestSolution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

console.log(solution(8, 2, 3));
