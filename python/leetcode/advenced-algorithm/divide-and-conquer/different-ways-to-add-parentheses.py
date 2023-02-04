from typing import List


class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        if expression.isdigit():
            return [int(expression)]

        results = []
        for index, value in enumerate(expression):
            if value in "+-*":
                left = self.diffWaysToCompute(expression[:index])
                right = self.diffWaysToCompute(expression[index + 1 :])
                for l in left:
                    for r in right:
                        results.append(self.compute(l, r, value))

        return results

    def compute(self, left, right, op):
        if op == "+":
            return left + right
        elif op == "-":
            return left - right
        return left * right
