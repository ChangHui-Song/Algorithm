n = int(input())
arr = list(map(int, input().split()))
up_res = 1
down_res = 1

up_tmp = 1
for i in range(1, n):
    if (arr[i - 1] - arr[i] <= 0):
        up_tmp += 1
    else:
        if (up_res < up_tmp):
            up_res = up_tmp
        up_tmp = 1
if (up_res < up_tmp):
    up_res = up_tmp

down_tmp = 1
for i in range(1, n):
    if (arr[i - 1] - arr[i] >= 0):
        down_tmp += 1
    else:
        if (down_res < down_tmp):
            down_res = down_tmp
        down_tmp = 1
if (down_res < down_tmp):
    down_res = down_tmp

print(max(up_res, down_res))