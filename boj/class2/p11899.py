import sys
from collections import deque as dq

if __name__ == "__main__":
	input = sys.stdin.readline
	n, k = map(int, input().split())
	arr = dq(i for i in range(1, n + 1))

	print('<', end='')
	while (arr):
		for _ in range(k - 1):
			arr.append(arr.popleft())
		print(str(arr.popleft()), end='')
		if (arr):
			print(', ', end='')
	print('>')