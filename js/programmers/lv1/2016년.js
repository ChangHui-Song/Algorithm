MONTH_DATE = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
DATE_STRING = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

function solution(a, b) {
  console.log(MONTH_DATE.slice(0, a));
  const month_date = MONTH_DATE.slice(0, a).reduce((a, b) => a + b, 0);
  return a === 1 ? DATE_STRING[(b - 1) % 7] : DATE_STRING[(month_date + (b - 1)) % 7];
}

console.log(solution(5, 24));
