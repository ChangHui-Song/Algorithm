import sys

# 좌표 계산

if __name__ == "__main__":
	x, y, w, h = map(int, sys.stdin.readline().split())
	route = [x, y, w - x, h - y]
	route.sort()
	print(route[0])