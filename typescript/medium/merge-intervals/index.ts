export function merge(intervals: number[][]): number[][] {
  const answer: number[][] = [];
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of sortedIntervals) {
    if (answer.length && interval[0] <= answer.at(-1)[1]) {
      answer.at(-1)[1] = Math.max(answer.at(-1)[1], interval[1]);
    } else {
      answer.push(interval);
    }
  }

  return answer;
}
