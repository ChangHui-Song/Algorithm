const dp = {};

/**
 * @param {number} n
 * @return {number}
 */
var fib1 = function (n) {
  if (n <= 1) return n;

  if (dp[n]) return dp[n];

  dp[n] = fib1(n - 1) + fib1(n - 2);
  return dp[n];
};

var fib2 = function (n) {
  let x = 0;
  let y = 1;

  for (let i = 0; i < n; i++) {
    const tmp = x + y;
    x = y;
    y = tmp;
  }

  return x;
};
