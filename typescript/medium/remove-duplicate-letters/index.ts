export function removeDuplicateLetters(s: string): string {
  const counter = new Map<string, number>();
  const seen = new Set<string>();
  const stack: string[] = [];

  for (let char of s) {
    if (!counter.has(char)) counter.set(char, 0);
    counter.set(char, counter.get(char) + 1);
  }

  for (let char of s) {
    counter.set(char, counter.get(char) - 1);
    if (seen.has(char)) continue;

    while (
      stack.length &&
      char < stack.at(-1) &&
      counter.get(stack.at(-1)) > 0
    ) {
      seen.delete(stack.pop());
    }
    stack.push(char);
    seen.add(char);
  }

  return stack.join('');
}
