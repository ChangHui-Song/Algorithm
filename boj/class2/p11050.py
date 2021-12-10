import sys

if __name__ == "__main__":
	n, k = map(int, sys.stdin.readline().split())

	num, denom = 1, 1

	for i in range(n, 0, -1):
		num *= i
	for i in range(n - k, 0, -1):
		denom *= i
	for i in range(k, 0, -1):
		denom *= i
	print(num // denom)