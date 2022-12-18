from typing import List
import collections


class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = collections.defaultdict(list)
        print(sorted(tickets, reverse=True))
        for starting, destination in sorted(tickets, reverse=True):
            graph[starting].append(destination)

        route = []

        def dfs(starting: str):
            while graph[starting]:
                dfs(graph[starting].pop())
            route.append(starting)

        dfs('JFK')
        return route[::-1]
