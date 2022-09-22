import sys

# 딕셔너리 사용

if __name__ == "__main__":
	input = sys.stdin.readline
	n = int(input())
	arr1 = list(map(int, input().split()))
	m = int(input())
	arr2 = list(map(int, input().split()))
	res = dict()

	for x in arr1:
		if (not res.get(x)):
			res[x] = 1
		else:
			res[x] += 1
	for x in arr2:
		if (not res.get(x)):
			print(0, end=' ')
		else:
			print(res[x], end=' ')