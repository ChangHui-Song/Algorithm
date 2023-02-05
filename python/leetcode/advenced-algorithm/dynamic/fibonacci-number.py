from collections import defaultdict


class Solution1:
    dp = defaultdict(int)

    def fib(self, n: int) -> int:
        if n <= 1:
            return n

        if self.dp[n]:
            return self.dp[n]
        self.dp[n] = self.fib(n - 1) + self.fib(n - 2)
        return self.dp[n]


class Solution2:
    def fib(self, n: int) -> int:
        x, y = 0, 1
        for _ in range(n):
            x, y = y, x + y

        return x
