import sys

if __name__ == "__main__":
	while True:
		try:
			a, b = map(int, sys.stdin.readline().split())
			print (a + b)
		except:
			break ;