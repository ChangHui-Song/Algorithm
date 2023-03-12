export function mostCommonWord(paragraph: string, banned: string[]): string {
  const words = paragraph.toLowerCase().replace(/[^\w]/g, ' ').split(' ');
  let wordsObj = {};
  let mostWord = '';
  let mostCount = 0;

  for (let word of words) {
    if (word.length === 0 || banned.includes(word)) continue;
    if (!wordsObj[word]) wordsObj[word] = 0;
    wordsObj[word]++;
  }

  Object.keys(wordsObj).forEach((word) => {
    if (mostCount < wordsObj[word]) {
      mostWord = word;
      mostCount = wordsObj[word];
    }
  });

  return mostWord;
}
