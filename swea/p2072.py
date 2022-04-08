T = int(input())

for test_case in range(1, T + 1):
	arr = list(map(int, input().split()))
	res = 0
	for i in range(len(arr)):
		if (arr[i] % 2 == 1):
			res += arr[i]
	print("#" + str(test_case), res)