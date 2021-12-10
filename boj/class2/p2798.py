import sys

if __name__ == "__main__":
	n, m = map(int, sys.stdin.readline().split())
	arr = list(map(int, sys.stdin.readline().split()))

	max_score = 0
	for i in range(len(arr) - 2):
		for j in range(i + 1, len(arr) - 1):
			for k in range(j + 1, len(arr)):
				cur_score = arr[i] + arr[j] + arr[k]
				if (cur_score <= m and cur_score > max_score):
					max_score = cur_score
	print(max_score)