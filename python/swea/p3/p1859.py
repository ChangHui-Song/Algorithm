T = int(input())

for test_case in range(1, T + 1):
    n = int(input())
    arr = list(map(int, input().split()))
    max = arr[n - 1]
    res = 0
    for i in range(n - 2, -1, -1):
        if (arr[i] <= max):
            res += max - arr[i]
        else:
            max = arr[i]
    print("#" + str(test_case), res)