for tc in range(1, 11):
    N = int(input())
    board = [list(map(int, input().split())) for _ in range(N)]
    res = 0
    
    for i in range(N):
        check = 0
        for j in range(N):
            if board[j][i] == 1:
                check = 1
            if (board[j][i] == 2 and check):
                check = 0
                res += 1
    print(f'#{tc} {res}')