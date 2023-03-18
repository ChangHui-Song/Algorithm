export function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let answer = '';
  const conversion = new Map<number, string>();
  const rule = 2 * (numRows - 1);

  for (let i = 0; i < s.length; i++) {
    const key =
      i % rule <= numRows - 1
        ? i % rule
        : ((i % rule) * (numRows - 1) - 2) % numRows;
    const exString = conversion.get(key) ?? '';
    conversion.set(key, exString + s[i]);
  }

  for (let i = 0; i < conversion.size; i++) {
    answer = answer + conversion.get(i);
  }
  return answer;
}
