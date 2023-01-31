from collections import Counter
from typing import List

# class Solution:
#     def leastInterval(self, tasks: List[str], n: int) -> int:
#         counter = Counter(tasks)
#         result = 0
#         
#         print(counter.values())
#         while True:
#             sub_count = 0
#             for task, _ in counter.most_common(n + 1):
#                 sub_count += 1
#                 result += 1
#
#                 counter.subtract(task)
#                 counter += Counter()
#
#             if not counter:
#                 break
#
#             result += n - sub_count + 1
#
#         return result
#
# Solution().leastInterval(["A","A","A","B","B","B"], 2)

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks)
        count_sorted = list(count.values())
        count_sorted.sort(reverse=True)

        idle_units = (count_sorted[0] - 1) * n
        for i in range(1, len(count_sorted)):
            if (count_sorted[i] < count_sorted[0]):
                idle_units -= count_sorted[i]
            else:
                idle_units -= count_sorted[i] - 1

        return len(tasks) + (idle_units if idle_units > 0 else 0)

