for test_case in range(1, 3):
    n = int(input())
    arr = list(map(int, input().split()))
    res = 0
    for i in range(2, n - 2):
        right_max, reft_max = 0, 0
        if (arr[i - 1] > arr[i - 2]):
            right_max = arr[i - 1]
        else:
            right_max = arr[i - 2]
        if (arr[i + 1] > arr[i + 2]):
            left_max = arr[i + 1]
        else:
            left_max = arr[i + 2]
        if (right_max < arr[i] and left_max < arr[i]):
            if (right_max > left_max):
                res += arr[i] - right_max
            else:
                res += arr[i] - left_max
    print("#" + str(test_case), res)