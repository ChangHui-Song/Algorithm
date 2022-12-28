function solution(n) {
  let answer = 0;
  let current = 1;

  while (current <= n) {
    if (n % current === 0) {
      answer += current;
    }
    current++;
  }
  return answer;
}

function bestSolution(n) {
  let answer = 0;
  let sqrt = Math.sqrt(n);

  for (let i = 1; i <= sqrt; i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  return Math.floor(sqrt) === sqrt ? answer - Math.floor(sqrt) : answer;
}

for (let i = 0; i < 100; i++) {
  console.log(`${i} : ${solution(i) - bestSolution(i) + '\n'}`);
}
