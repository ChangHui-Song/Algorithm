import sys

# 이분 탐색

if __name__ == "__main__":
	k, n = map(int, sys.stdin.readline().split())
	arr = []
	for _ in range(k):
		arr.append(int(sys.stdin.readline()))
	left, right = 1, max(arr)
	while left <= right:
		answer = 0
		mid = (left + right) // 2
		for x in arr:
			answer += x // mid
		if answer < n:
			right = mid - 1
		else:
			left = mid + 1
	print(right)