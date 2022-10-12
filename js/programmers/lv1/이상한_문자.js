function solution(s) {
  const sSplit = s.split(' ');

  for (let i = 0; i < sSplit.length; i++) {
    const subArr = [...sSplit[i]];
    sSplit[i] = subArr.map((letter, idx) => (!(idx % 2) ? letter.toUpperCase() : letter.toLowerCase())).join('');
  }
  return sSplit.join(' ');
}

function solution2(s) {
  const subArr = [...s];
  let offset = 0;
  let idx = 0;
  while (subArr[offset + idx]) {
    if (subArr[offset + idx] === ' ') {
      offset += idx + 1;
      idx = 0;
      continue;
    } else if (idx % 2) {
      subArr[offset + idx] = subArr[offset + idx].toLowerCase();
    } else {
      subArr[offset + idx] = subArr[offset + idx].toUpperCase();
    }
    idx++;
  }
  return subArr.join('');
}

console.log(solution2('abc abc'));
