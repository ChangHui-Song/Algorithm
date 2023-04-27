const compute = (left: number, right: number, op: string): number => {
  if (op === '+') {
    return left + right;
  } else if (op === '-') {
    return left - right;
  }
  return left * right;
};

const helper = (left: number[], right: number[], op: string): number[] => {
  const results: number[] = [];

  for (let l of left) {
    for (let r of right) {
      results.push(compute(l, r, op));
    }
  }

  return results;
};

export function diffWaysToCompute(expression: string): number[] {
  if (!isNaN(Number(expression))) {
    return [Number(expression)];
  }

  const results: number[] = [];

  for (let i = 0; i < expression.length; i++) {
    if ('+-*'.includes(expression[i])) {
      const left = diffWaysToCompute(expression.slice(0, i));
      const right = diffWaysToCompute(expression.slice(i + 1));

      results.push(...helper(left, right, expression[i]));
    }
  }
  return results;
}
