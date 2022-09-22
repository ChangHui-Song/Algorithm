def solution(n, m, board):
    count = 0
    max_picture = 0

    for i in range(n):
        for j in range(m):
            if board[i][j] == 1:
                count += 1
                tmp = bfs(board, i, j)
                if tmp > max_picture:
                    max_picture = tmp
    print(count)
    print(max_picture)

def bfs(board, n, m):
    dx = [0, 1, 0, -1]
    dy = [-1, 0, 1, 0]
    que = []
    result = 0
    
    que.append((n, m))
    board[n][m] = 0
    while (que):
        (x, y) = que.pop(0)
        result += 1
        for i in range(4):
            if (x + dx[i] >= 0 and y + dy[i] >= 0 and
                x + dx[i] < len(board) and y + dy[i] < len(board[0])):
                if board[x + dx[i]][y + dy[i]]:
                    board[x + dx[i]][y + dy[i]] = 0
                    que.append((x + dx[i], y + dy[i]))
    return result

import sys

if __name__ == '__main__':
    input = sys.stdin.readline
    n, m = map(int, input().split())
    board = [list(map(int, input().split())) for _ in range(n)]
    
    solution(n, m, board)