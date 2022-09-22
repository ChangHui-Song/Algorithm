T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    arr = [0, 1, 1, 1, 2, 2]
    
    if N > 5:
        for i in range(1, N - 4):
            arr.append(arr[i] + arr[i + 4])
        print(f'#{tc} {arr[-1]}')
    else:
        print(f'#{tc} {arr[N]}')