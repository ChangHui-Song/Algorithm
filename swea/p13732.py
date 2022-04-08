def solution(arr, i, j, x):
    for i in range(i, i + x):
        cur = 0
        if (len(arr) <= i):
            return 1
        while (len(arr) > j + cur and arr[i][j + cur] == "#"):
            arr[i][j + cur] = "."
            cur += 1
        if (cur != x):
            return 1
    return 0

t = int(input())
for test_case in range(1, t + 1):
    n = int(input())
    arr = [list(input()) for _ in range(n)]
    flag = 0
    x = 0
    for i in range(n):
        for j in range(n):
            if (arr[i][j] == "#" and not flag):
                flag = 1
                while (len(arr) > x + j and arr[i][x + j] == "#"):
                    x += 1
                flag += solution(arr, i, j, x)
            elif (arr[i][j] == "#" and flag):
                flag = 2
                break
        if (flag == 2):
            break
    print("#" + str(test_case), end=" ")
    if (flag == 1):
        print("yes")
    else:
        print("no")