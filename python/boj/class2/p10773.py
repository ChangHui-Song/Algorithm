import sys

if __name__ == "__main__":
	input = sys.stdin.readline
	k = int(input())
	res = []

	for _ in range(k):
		n = int(input())
		if(n == 0):
			res.pop()
		else:
			res.append(n)
	print(sum(res))