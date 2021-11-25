import sys

if __name__ == "__main__":
	h, m = map(int, sys.stdin.readline().split())
	
	if (m - 45 >= 0):
		print(h, m - 45)
	else:
		if (h != 0):
			print(h - 1, 60 + (m - 45))
		else:
			print(23, 60 + (m - 45))