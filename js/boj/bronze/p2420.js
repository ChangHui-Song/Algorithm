const { readFileSync } = require('fs');

const [N, M] = readFileSync('/dev/stdin').toString().split(' ');

console.log(Math.abs(N - M));
