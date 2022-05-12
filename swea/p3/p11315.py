def check(board, n):
    for i in range(n):
        if ("ooooo" in board[i]):
            return ("YES")

    for i in range(n):
        if ("ooooo" in "".join([board[j][i] for j in range(n)])):
            return ("YES")

    for i in range(n - 4):
        for j in range(n - 4):
            if ("ooooo" == "".join([board[i + k][j + k] for k in range(5)])):
                return ("YES")

    for i in range(n - 4):
        for j in range(4, n):
            if ("ooooo" == "".join([board[i + k][j - k] for k in range(5)])):
                return ("YES")

    return ("NO")

T = int(input())

for t in range(T):
    n = int(input())
    board = [input().rstrip() for _ in range(n)]

    print("#" + str(t + 1), end=" ")
    print(check(board, n))