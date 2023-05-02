export function climbStairs(n: number): number {
  const dp = new Map<number, number>();

  const helper = (sub: number): number => {
    if (sub <= 2) {
      return sub;
    }

    if (dp.has(sub)) {
      return dp.get(sub);
    }
    dp.set(sub, helper(sub - 1) + helper(sub - 2));
    return dp.get(sub);
  };

  return helper(n);
}
