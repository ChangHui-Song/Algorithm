function solution(survey, choices) {
  let answer = '';
  const category = {
    0: { R: 0, T: 0 },
    1: { C: 0, F: 0 },
    2: { J: 0, M: 0 },
    3: { A: 0, N: 0 },
  };

  for (let i = 0; i < choices.length; i++) {
    let quo = Math.floor(choices[i] / 4);
    let rem = choices[i] % 4;

    if (quo === 0) rem = 4 - rem;
    if (!rem) continue;
    switch (survey[i]) {
      case 'RT':
      case 'TR':
        category[0][survey[i][quo]] += rem;
        break;
      case 'CF':
      case 'FC':
        category[1][survey[i][quo]] += rem;
        break;
      case 'JM':
      case 'MJ':
        category[2][survey[i][quo]] += rem;
        break;
      case 'AN':
      case 'NA':
        category[3][survey[i][quo]] += rem;
    }
  }
  for (let indicator in category) {
    const keys = Object.keys(category[indicator]);
    answer += category[indicator][keys[0]] < category[indicator][keys[1]] ? keys[1] : keys[0];
  }
  return answer;
}

function bestSolution(survey, choices) {
  const category = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((type) => {
    type.split('').forEach((indicator) => (category[indicator] = 0));
  });

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    category[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([left, right]) => (category[left] < category[right] ? right : left)).join('');
}

console.log(bestSolution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
console.log(bestSolution(['TR', 'RT', 'TR'], [7, 1, 3]));
