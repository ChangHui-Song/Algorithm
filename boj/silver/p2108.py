import sys

if __name__ == "__main__":
	n = int(sys.stdin.readline())
	tmp = list(0 for _ in range(8001))
	arr = []
	max_num, min_num, total = -4000, 4000, 0
	flags = 1

	for _ in range(n):
		num = int(sys.stdin.readline())
		arr.append(num)
		tmp[4000 + num] += 1
		if (max_num < num):
			max_num = num
		if (min_num > num):
			min_num = num
	arr = sorted(arr)

	most_val = max(tmp)
	most_num = 0
	for i in range(8001):
		if (most_val == tmp[i] and flags == 1):
			flags = 0
			most_num = i - 4000
		elif (most_val == tmp[i] and flags == 0):
			most_num = i - 4000
			break

	print(round(sum(arr) / n))
	print(arr[n // 2])
	print(most_num)
	print(max(arr) - min(arr))