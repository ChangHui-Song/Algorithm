export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const answer = new Array<number>(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack && temperatures[i] > temperatures[stack.at(-1)]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }
  return answer;
}
