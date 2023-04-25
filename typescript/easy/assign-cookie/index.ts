export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let currentChild = 0;
  let currentCookie = 0;

  while (currentChild < g.length && currentCookie < s.length) {
    if (g[currentChild] <= s[currentCookie]) {
      currentChild++;
    }
    currentCookie++;
  }

  return currentChild;
}
