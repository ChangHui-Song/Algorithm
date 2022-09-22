import sys

if __name__ == "__main__":
	input = sys.stdin.readline
	n, m, b = map(int, input().split())
	arr = list(list(map(int, input().split())) for _ in range(n))
	res, cur = 257 * n * m, 0

	for i in range(257):
		under = 0
		over = 0
		for j in range(len(arr)):
			for k in range(len(arr[j])):
				if (arr[j][k] > i):
					over += arr[j][k] - i
				else:
					under += i - arr[j][k]
		my_inven = b + over
		if (my_inven < under):
			continue
		time = 2 * over + under
		if (time <= res):
			res, cur = time, i
	print(res, cur)