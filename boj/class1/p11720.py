import sys

if __name__ == "__main__":
	n = int(sys.stdin.readline())
	s = sys.stdin.readline().rstrip()
	res = 0
	for x in s:
		res += int(x)
	print(res)