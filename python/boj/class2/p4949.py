import sys

# stack

if __name__ == "__main__":
	while True:
		stack = []
		flags = 0
		string = sys.stdin.readline().rstrip()
		if (string == '.'):
			break
		for x in string:
			if (x == '(' or x == '['):
				stack.append(x)
			if (x == ')'):
				if (not stack):
					flags = 1
					break
				if (stack[-1] == '('):
					stack.pop()
				else:
					break
			elif (x == ']'):
				if (not stack):
					flags = 1
					break
				if (stack[-1] == '['):
					stack.pop()
				else:
					break
		if (not stack and not flags):
			print('yes')
		else:
			print('no')