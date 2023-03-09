export function numJewelsInStones(jewels: string, stones: string): number {
  let answer = 0;
  const frequency = new Map<string, number>();

  for (let stone of stones) {
    if (!frequency.has(stone)) frequency.set(stone, 0);
    frequency.set(stone, frequency.get(stone) + 1);
  }

  for (let jewel of jewels) {
    if (frequency.has(jewel)) answer += frequency.get(jewel);
  }
  return answer;
}
