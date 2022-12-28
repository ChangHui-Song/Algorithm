// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는
// 주어진 자연수의 홀수인 약수의 갯수와 같다.

function solution(n) {
  let answer = 0;

  for (let i = 1; i < Math.floor(n / 2) + 1; i++) {
    if (!(n % i) && i % 2) answer++;
  }
  return n % 2 ? ++answer : answer;
}

console.log(solution(2));
