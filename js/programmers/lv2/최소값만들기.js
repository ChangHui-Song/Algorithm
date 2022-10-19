function solution(A, B) {
  let answer = 0;
  const leftArr = A.sort((a, b) => a - b);
  const rightArr = B.sort((a, b) => b - a);

  leftArr.forEach((num, idx) => {
    answer += num * rightArr[idx];
  });
  return answer;
}

function bestSolution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((answer, val, idx) => (answer += val * B[idx]), 0);
}

console.log(bestSolution([1, 4, 2], [5, 4, 4]));
console.log(bestSolution([1, 2], [3, 4]));
