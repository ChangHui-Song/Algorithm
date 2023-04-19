export function hammingDistance(x: number, y: number): number {
  return Array.from((x ^ y).toString(2).matchAll(/1/g)).length;
}
