import sys

if __name__ == "__main__":
	input = sys.stdin.readline
	n = int(input())
	res = [[] for _ in range(201)]

	for _ in range(n):
		age, name = map(str, input().split())
		res[int(age)].append(name)
	for i in range(len(res)):
		if (res[i]):
			for x in res[i]:
				print(i, x)