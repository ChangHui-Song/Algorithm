const BONUS = {
  S: 1,
  D: 2,
  T: 3,
};

const OPTION = {
  '*': 2,
  '#': -1,
};

function solution(dartResult) {
  const result = [];
  let i = 0;
  let currentScore = 0;
  let currentBonus = '';
  let currentOption = '';

  while (dartResult.length) {
    currentScore = parseInt(dartResult);
    if (currentScore === 10) {
      currentBonus = dartResult[i + 2];
      currentOption =
        dartResult[i + 3] && (dartResult[i + 3] === '*' || dartResult[i + 3] === '#') ? dartResult[i + 3] : '';
      dartResult = currentOption.length ? dartResult.slice(i + 4) : dartResult.slice(i + 3);
    } else {
      currentBonus = dartResult[i + 1];
      currentOption =
        dartResult[i + 2] && (dartResult[i + 2] === '*' || dartResult[i + 2] === '#') ? dartResult[i + 2] : '';
      dartResult = currentOption.length ? dartResult.slice(i + 3) : dartResult.slice(i + 2);
    }
    if (currentOption.length !== 0) {
      if (result.length && currentOption === '*') result[result.length - 1] = result[result.length - 1] * 2;
      result.push(currentScore ** BONUS[currentBonus] * OPTION[currentOption]);
      currentOption = '';
      continue;
    }
    result.push(currentScore ** BONUS[currentBonus]);
  }
  return result.reduce((a, b) => a + b, 0);
}

console.log(solution('1S2D*3T'));
