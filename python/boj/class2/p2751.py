import sys

# 정렬

if __name__ == "__main__":
	n = int(sys.stdin.readline())
	arr = list(int(sys.stdin.readline()) for _ in range(n))
	arr = sorted(arr)
	for x in arr:
		print(x)