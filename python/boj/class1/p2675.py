import sys

if __name__ == "__main__":
	for _ in range(int(sys.stdin.readline())):
		r, s = map(str, sys.stdin.readline().split())
		r = int(r)
		for x in s:
			print(x * r, end='')
		print()