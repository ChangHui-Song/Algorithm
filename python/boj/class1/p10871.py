import sys

if __name__ == "__main__":
	n, x = map(int, sys.stdin.readline().split())
	a = list(map(int, sys.stdin.readline().split()))
	
	for param in a:
		if (param < x):
			print(param, end=' ')