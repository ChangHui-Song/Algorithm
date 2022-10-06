function solution(arr, divisor) {
  let answer = [];

  arr.forEach((num) => {
    if (!(num % divisor)) answer.push(num);
  });
  if (answer.length === 0) {
    answer.push(-1);
  } else {
    answer.sort((a, b) => a - b);
  }

  return answer;
}

// best solution
function bestSolution(arr, divisor) {
  let answer = arr.filter((num) => !(num % divisor));
  return !answer.length ? [-1] : answer.sort((a, b) => a - b);
}

console.log(bestSolution([5, 9, 7, 10], 5));
console.log(bestSolution([3, 2, 6], 10));
