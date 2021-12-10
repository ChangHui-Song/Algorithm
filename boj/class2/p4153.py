import sys

if __name__ == "__main__":
	while True:
		arr = list(map(int, sys.stdin.readline().split()))
		arr = sorted(arr)
		if (arr == [0, 0, 0]):
			break
		elif (arr[0] ** 2 + arr[1] ** 2 == arr[2] ** 2):
			print('right')
		else:
			print('wrong')