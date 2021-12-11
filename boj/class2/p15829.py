import sys

if __name__ == "__main__":
	input = sys.stdin.readline
	n = int(input())
	string = input().rstrip()
	res = 0

	for i, x in enumerate(string):
		res += (ord(x) - 96) * (31 ** i)
	res = res % 1234567891
	print(res)