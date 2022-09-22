global tmp
tmp = 0
def solution(n, m, board):
    count = 0
    max_size = 0
    global tmp
    
    for i in range(n):
        for j in range(m):
            if (board[i][j] == 1):
                count += 1
                dfs(board, i, j)
            if (max_size < tmp):
                max_size = tmp
            tmp = 0
    print (count)
    print(max_size)

def dfs(board, n, m):
    dx = [0, 1, 0, -1]
    dy = [-1, 0, 1, 0]
    global tmp
    
    board[n][m] = 0
    tmp += 1
    for i in range(4):
        if (n + dx[i] >= 0 and m + dy[i] >= 0 and 
            n + dx[i] < len(board) and m + dy[i] < len(board[0])):
            if (board[n + dx[i]][m + dy[i]]):
                dfs(board, n + dx[i], m + dy[i])

import sys

if __name__ == '__main__':
    input = sys.stdin.readline
    n, m = map(int, input().split())
    board = [list(map(int, input().split())) for _ in range(n)]
    limit_number = 1000000
    sys.setrecursionlimit(limit_number)

    solution(n, m, board)