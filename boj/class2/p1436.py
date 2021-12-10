import sys

# brote force

if __name__ == "__main__":
	n = int(sys.stdin.readline())
	answer = 665
	i = 0

	while n != i:
		answer += 1
		if '666' in str(answer):
			i += 1
	print(answer)