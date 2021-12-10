import sys

# list 활용

if __name__ == "__main__":
	n = int(sys.stdin.readline())
	arr = list(tuple(map(int, sys.stdin.readline().split())) for _ in range(n))
	res = [1 for _ in range(n)]
	for i in range(n):
		for j in range(n):
			if (arr[i][0] < arr[j][0] and arr[i][1] < arr[j][1]):
				res[i] += 1
	res = list(map(str, res))
	print(' '.join(res))