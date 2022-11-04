// 단어 길이 재기

const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(path.resolve(), 'input.txt')).toString().trim();
console.log(input.length);
