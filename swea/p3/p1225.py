for _ in range(10):
    T = int(input())
    arr = list(map(int, input().split()))
    i = 1;

    while (arr[-1] != 0):
        cur = arr.pop(0) - i
        if (cur < 0):
            arr.append(0)
        else:
            arr.append(cur)
        if (i == 5):
            i = 1
        else:
            i += 1
    print(f'#{T} {" ".join(str(i) for i in arr)}')