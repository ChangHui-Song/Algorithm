import sys

if __name__ == "__main__":
	input = sys.stdin.readline
	n = int(input())
	res = [0 for _ in range(10001)]

	for _ in range(n):
		res[int(input())] += 1
	for i in range(1, 10001):
		if (res[i]):
			for _ in range(res[i]):
				print(i)