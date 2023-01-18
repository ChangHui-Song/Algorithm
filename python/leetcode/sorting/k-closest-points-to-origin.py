from typing import List


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        sorted_points = sorted(points, key=lambda x: (x[0] ** 2 + x[1] ** 2))
        return sorted_points[:k]


print(Solution().kClosest([[1, 3], [-2, 2]], 1))
print(Solution().kClosest([[3, 3], [5, -1], [-2, 4]], 2))
