from typing import List


class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()

        print(g)
        print(s)
        child = cookie = 0
        while child < len(g) and cookie < len(s):
            if g[child] <= s[cookie]:
                child += 1
            cookie += 1

        return child


print(Solution().findContentChildren([1, 2, 3], [1, 1]))
