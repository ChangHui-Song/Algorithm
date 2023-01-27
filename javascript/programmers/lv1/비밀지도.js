function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(
      [...('0'.repeat(n) + (arr1[i] | arr2[i]).toString(2)).slice(-n)].map((cur) => (cur === '0' ? ' ' : '#')).join('')
    );
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
