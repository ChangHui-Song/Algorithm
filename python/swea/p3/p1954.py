T = int(input())

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

for tc in range(1, T + 1):
    n = int(input())
    board = [[0] * n for _ in range(n)]
    i = 1
    cx = 0
    cy = 0
    rotate = 0
    
    while (i < n * n + 1):
        board[cx][cy] = i
        cx += dx[rotate]
        cy += dy[rotate]
        if (cx < 0 or cy < 0 or cx >= n or cy >= n or board[cx][cy] != 0):
            cx -= dx[rotate]
            cy -= dy[rotate]
            rotate = (rotate + 1) % 4
            cx += dx[rotate]
            cy += dy[rotate]
        i += 1
    print(f"#{tc}")
    for x in board:
        print(' '.join(str(s) for s in x))