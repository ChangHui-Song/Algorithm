from typing import List
import collections
import heapq


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = collections.defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))

        heap = [(0, k)]
        dist = collections.defaultdict(int)

        while heap:
            time, node = heapq.heappop(heap)
            print(time, node)
            if node not in dist:
                dist[node] = time
                for v, w in graph[node]:
                    alt = time + w
                    heapq.heappush(heap, (alt, v))

        print(dist)
        if len(dist) == n:
            return max(dist.values())
        return -1


print(Solution().networkDelayTime([[3, 1, 5], [3, 2, 2], [2, 1, 2], [
      3, 4, 1], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 8, 1], [8, 1, 1]], 8, 3))
