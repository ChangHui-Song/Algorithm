import sys

if __name__ == "__main__":
	input = sys.stdin.readline
	t = int(input())

	for _ in range(t):
		n = int(input())
		pre0, cur0 = 0, 1
		pre1, cur1 = 1, 1
		if (n == 0):
			print(1, 0)
		elif (n == 1):
			print(0, 1)
		else:
			for _ in range(n - 2):
				pre0, cur0 = cur0, pre0 + cur0
				pre1, cur1 = cur1, pre1 + cur1
			print(cur0, cur1)