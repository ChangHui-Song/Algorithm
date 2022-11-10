/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function (paragraph, banned) {
  const words = paragraph.toLowerCase().replace(/[^\w]/g, ' ').split(' ');
  const wordsObj = {};
  let mostWord = '';
  let mostCount = 0;

  words.forEach((word) => {
    word = word.replace(/[^\w]/g, '');
    if (word.length && !banned.includes(word)) {
      if (wordsObj[word]) wordsObj[word] += 1;
      else wordsObj[word] = 1;
    }
  });

  Object.keys(wordsObj).forEach((word) => {
    if (mostCount < wordsObj[word]) {
      mostWord = word;
      mostCount = wordsObj[word];
    }
  });

  return mostWord;
};

console.log(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit',
  ])
);
console.log(mostCommonWord('a.', []));
console.log(mostCommonWord('"a, a, a, a, b,b,b,c, c"', ['a']));
console.log(mostCommonWord('Bob', []));
