/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = (logs) => {
  const letters = [];
  const digits = [];

  logs.forEach((log) => {
    if (log.split(' ')[1].match(/[0-9]/g)) digits.push(log);
    else letters.push(log);
  });

  letters.sort((a, b) => {
    let aLog = a.substr(a.indexOf(' ') + 1);
    let bLog = b.substr(b.indexOf(' ') + 1);

    if (aLog !== bLog) {
      return aLog.localeCompare(bLog);
    } else {
      return a.localeCompare(b);
    }
  });

  return letters.concat(digits);
};

console.log(
  reorderLogFiles([
    'dig1 8 1 5 1',
    'let1 art can',
    'dig2 3 6',
    'let2 own kit dig',
    'let3 art zero',
  ])
);

console.log(
  reorderLogFiles([
    'a1 9 2 3 1',
    'g1 act car',
    'zo4 4 7',
    'ab1 off key dog',
    'a8 act zoo',
  ])
);
console.log(
  reorderLogFiles([
    'a1 9 2 3 1',
    'g1 act car',
    'zo4 4 7',
    'ab1 off key dog',
    'a8 act zoo',
    'a2 act car',
  ])
);

console.log(
  reorderLogFiles([
    'dig1 8 1 5 1',
    'let1 art zero can',
    'dig2 3 6',
    'let2 own kit dig',
    'let3 art zero',
  ])
);
