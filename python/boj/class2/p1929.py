import sys

# 소수 찾기

if __name__ == "__main__":
	n, m = map(int, sys.stdin.readline().split())

	for i in range(n, m + 1):
		check = 0
		if (i == 1):
			continue
		for j in range(2, int(i**(1/2) + 1)):
			if i % j == 0:
				check = 1
				break
		if check == 0:
			print(i)