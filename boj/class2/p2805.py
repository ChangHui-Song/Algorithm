import sys

# 이분 탐색

if __name__ == "__main__":
	n, m = map(int, sys.stdin.readline().split())
	tree = list(map(int, sys.stdin.readline().split()))
	max_tree = max(tree)

	left, right = 0, max_tree
	while (left <= right):
		res = 0
		mid = (left + right) // 2
		for x in tree:
			if (x > mid):
				res += x - mid
		if (res < m):
			right = mid - 1
		else:
			left = mid + 1
	print(right)