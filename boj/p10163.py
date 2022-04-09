arr = list(list(-1 for _ in range(1001)) for _ in range(1001))
n = int(input())

for i in range(n):
    x_start, y_start, width, height = map(int, input().split())
    for y in range(y_start, y_start + height):
        arr[y][x_start:x_start + width] = [i] * width
for i in range(n):
    res = 0
    for x in range(1001):
        res += arr[x].count(i)
    print(res)