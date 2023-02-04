const compute = (left, right, op) => {
  if (op === "+") {
    return left + right;
  } else if (op === "-") {
    return left - right;
  }
  return left * right;
};

const helper = (left, right, op) => {
  const results = [];
  for (let l of left) {
    for (let r of right) {
      results.push(compute(l, r, op));
    }
  }
  return results;
};
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  if (!isNaN(expression)) return [Number(expression)];

  const results = [];
  for (let i = 0; i < expression.length; i++) {
    if ("+-*".includes(expression[i])) {
      const left = diffWaysToCompute(expression.slice(0, i));
      const right = diffWaysToCompute(expression.slice(i + 1));

      results.push(...helper(left, right, expression[i]));
    }
  }
  return results;
};
