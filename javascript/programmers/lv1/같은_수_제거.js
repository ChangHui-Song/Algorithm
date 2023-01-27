function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.at(-1) !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function bestSolution(arr) {
  return arr.filter((num, idx) => num !== arr[idx + 1]);
}

console.log(bestSolution([1, 1, 3, 3, 0, 1, 1]));
