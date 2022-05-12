for tc in range(1, 11):
    N = int(input())
    lst = [list(input().rstrip()) for _ in range(8)]
    result = 0

    for i in range(8):
        for j in range(8 - N + 1):
            cul = lst[i][j : j + N]
            row = [lst[j + k][i] for k in range(N)]
            if (cul == cul[::-1]):
                result += 1
            if (row == row[::-1]):
                result += 1
    print(f'#{tc} {result}')