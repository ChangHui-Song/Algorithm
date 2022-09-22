T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    farm = list(list(map(int, list(input()))) for _ in range(N))
    mid = N // 2
    result = 0
    for i in range(N):
        if i <= mid:
            result += sum(farm[i][mid - i:mid + i + 1])
        else:
            result += sum(farm[i][i - mid:N - mid - i - 1])
    print(f'#{tc} {result}')