"""letter combinations of a phone number 20221214"""
from typing import List


class Solution:
    """
    :parameter {None}
    :return {None}
    """

    def letter_combinations(self, digits: str) -> List[str]:
        """
        :param {self, str}
        :return {List[str]}
        """
        if not digits:
            return []

        def dfs(index: int, path: str):
            if len(path) == len(digits):
                result.append(path)
                return

            for i in range(index, len(digits)):
                for j in dic[digits[i]]:
                    dfs(i + 1, path + j)

        dic = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }
        result = []
        dfs(0, "")
        return result


print(Solution().letter_combinations("23"))
print(Solution().letter_combinations(""))
print(Solution().letter_combinations("2"))
