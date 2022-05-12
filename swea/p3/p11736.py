T = int(input())

for t in range(T):
    n = int(input())
    arr = list(map(int, input().split()))
    res = 0
    
    for i in range(1, n - 1):
        if (arr[i - 1] < arr[i] and arr[i] < arr[i + 1] or \
            arr[i - 1] > arr[i] and arr[i] > arr[i + 1]):
            res += 1
    print('#{0} {1}'.format(t + 1, res))