import sys

# 팰린드롬

if __name__ == "__main__":
	while True:
		num = list(sys.stdin.readline().rstrip())
		if (num == ['0']):
			break
		num_len = len(num)
		flag = 0
		for i in range(num_len // 2):
			if (num[i] != num[num_len - i - 1]):
				print('no')
				flag = 1
				break
		if (flag == 0):
			print('yes')