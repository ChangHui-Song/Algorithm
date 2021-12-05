import sys

if __name__ == "__main__":
	g = int(sys.stdin.readline())

	if (90 <= g and g <= 100):
		print('A')
	elif (80 <= g and g <= 89):
		print('B')
	elif (70 <= g and g <= 79):
		print('C')
	elif (60 <= g and g <= 69):
		print('D')
	else:
		print('F')