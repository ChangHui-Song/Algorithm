import sys

if __name__ == "__main__":
	s = sys.stdin.readline().split()
	flag = 1

	if (s[0] == '1'):
		for i in range(1, len(s)):
			if (s[i] < s[i - 1]):
				flag = 0
				break ;
		if (flag):
			print('ascending')
		else:
			print('mixed')
	elif (s[0] == '8'):
		for i in range(1, len(s)):
			if (s[i] > s[i - 1]):
				flag = 0
				break ;
		if (flag):
			print('descending')
		else:
			print('mixed')
	else:
		print('mixed')