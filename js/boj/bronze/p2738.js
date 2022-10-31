// 행렬 덧셈

const { readFileSync } = require('fs');
const path = require('path');

const input = readFileSync(path.join(path.resolve(), 'input.txt')).toString().split('\n');
const answer = [];
let [N, M] = input[0].split(' ');
[N, M] = [Number(N), Number(M)];

const arr1 = input.slice(1, N + 1);
const arr2 = input.slice(N + 1, N * 2 + 1);

for (let i = 0; i < N; i++) {
  const arr1Row = arr1[i].split(' ');
  const arr2Row = arr2[i].split(' ');
  const resultRow = [];

  for (let j = 0; j < M; j++) {
    resultRow.push(Number(arr1Row[j]) + Number(arr2Row[j]));
  }
  answer.push(resultRow);
}

for (let i = 0; i < N; i++) {
  console.log(answer[i].join(' '));
}
