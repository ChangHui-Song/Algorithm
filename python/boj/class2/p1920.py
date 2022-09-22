import sys

# 이분 탐색

if __name__ == "__main__":
	n = int(sys.stdin.readline())
	tmp1 = sorted(list(map(int, sys.stdin.readline().split())))
	m = int(sys.stdin.readline())
	tmp2 = list(map(int, sys.stdin.readline().split()))

	for x in tmp2:
		left, right = 0, n - 1
		while left <= right:
			mid = (left + right) // 2
			if (x == tmp1[mid]):
				break
			elif (x <= tmp1[mid]):
				right = mid - 1
			else:
				left = mid + 1
		if (tmp1[mid] == x):
			print(1)
		else:
			print(0)