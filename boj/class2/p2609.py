import sys

if __name__ == "__main__":
	a, b = map(int, sys.stdin.readline().split())
	if (a < b):
		a, b = b, a
	tmp = a
	r = b
	while (r != 0):
		tmp, r = r, tmp % r
	print(tmp)
	print(a * b // tmp)