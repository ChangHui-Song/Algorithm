import sys

if __name__ == "__main__":
	n = int(sys.stdin.readline())
	words = []
	for _ in range(n):
		tmp = sys.stdin.readline().rstrip()
		words.append((len(tmp), tmp))
	words = list(set(words))
	words = sorted(words, key= lambda x : (x[0], x[1]))
	for x in words:
		print(x[1])