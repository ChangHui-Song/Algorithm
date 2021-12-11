import sys

if __name__ == "__main__":
	input = sys.stdin.readline
	n = int(input())
	arr = list(tuple(map(int, input().split())) for _ in range(n))
	arr = sorted(arr, key=lambda x : (x[0], x[1]))
	for x in arr:
		print(x[0], x[1])