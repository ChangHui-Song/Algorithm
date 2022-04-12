for _ in range(10):
    N = int(input())
    board = [list(input().rstrip()) for _ in range(100)]
    r_board = list(map(list, zip(*board)))
    max = 0

    for i in range(100):
        for j in range(100):
            for len in list(range(100, 1, -1)):
                if board[i][j : len] == board[i][len - 1 : j - 1 : -1]:
                    if max < len - j:
                        max = len - j
                if r_board[i][j : len] == r_board[i][len - 1 : j - 1 : -1]:
                    if max < len - j:
                        max = len - j
    print(f'#{N} {max}')