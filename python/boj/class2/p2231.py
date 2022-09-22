import sys

# 분해합

if __name__ == "__main__":
	n = int(sys.stdin.readline())
	answer = 0

	for i in range(n + 1):
		tmp = i
		for x in str(i):
			tmp += int(x)
		if (tmp == n):
			answer = i
			break
	print(answer)