USER = ['^', '>', 'v', '<']

def check_move(field, cur, coordinate):
    if field[cur[0] + coordinate[0]][cur[1] + coordinate[1]] == '*' or \
        field[cur[0] + coordinate[0]][cur[1] + coordinate[1]] == '#' or \
        field[cur[0] + coordinate[0]][cur[1] + coordinate[1]] == '-':
        return 1
    return 0

def insert_move(field, cur, coordinate):
    if cur[0] + coordinate[0] < 0 or \
        cur[0] + coordinate[0] >= len(field) or \
        cur[1] + coordinate[1] < 0 or \
        cur[1] + coordinate[1] >= len(field[0]):
        return field
    if check_move(field, cur, coordinate):
        return field
    field[cur[0]][cur[1]] = '.'
    if coordinate == (-1, 0):
        field[cur[0] + coordinate[0]][cur[1] + coordinate[1]] = USER[0]
    elif coordinate == (0, 1):
        field[cur[0] + coordinate[0]][cur[1] + coordinate[1]] = USER[1]
    elif coordinate == (1, 0):
        field[cur[0] + coordinate[0]][cur[1] + coordinate[1]] = USER[2]
    elif coordinate == (0, -1):
        field[cur[0] + coordinate[0]][cur[1] + coordinate[1]] = USER[3]
    cur[0] = cur[0] + coordinate[0]
    cur[1] = cur[1] + coordinate[1]
    return field

def move(field, cur, c):
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    if c == 'U':
        field[cur[0]][cur[1]] = USER[0]
        field = insert_move(field, cur, (dx[0], dy[0]))
    elif c == 'R':
        field[cur[0]][cur[1]] = USER[1]
        field = insert_move(field, cur, (dx[1], dy[1]))
    elif c == 'D':
        field[cur[0]][cur[1]] = USER[2]
        field = insert_move(field, cur, (dx[2], dy[2]))
    else:
        field[cur[0]][cur[1]] = USER[3]
        field = insert_move(field, cur, (dx[3], dy[3]))

    return field

def launch(field, cur):
    if field[cur[0]][cur[1]] == USER[0]:
        for i in range(cur[0], -1, -1):
            if field[i][cur[1]] == '#':
                break
            elif field[i][cur[1]] == '*':
                field[i][cur[1]] = '.'
                break
    elif field[cur[0]][cur[1]] == USER[1]:
        for i in range(cur[1], len(field[0])):
            if field[cur[0]][i] == '#':
                break
            elif field[cur[0]][i] == '*':
                field[cur[0]][i] = '.'
                break
    elif field[cur[0]][cur[1]] == USER[2]:
        for i in range(cur[0], len(field)):
            if field[i][cur[1]] == '#':
                break
            elif field[i][cur[1]] == '*':
                field[i][cur[1]] = '.'
                break
    else:
        for i in range(cur[1], -1, -1):
            if field[cur[0]][i] == '#':
                break
            elif field[cur[0]][i] == '*':
                field[cur[0]][i] = '.'
                break
    return field

T = int(input())

for tc in range(1, T + 1):
    H, W = map(int, input().split())
    field = list(list(input()) for _ in range(H))
    N = int(input())
    STRING = input().rstrip()
    for h in range(H):
        for w in range(W):
            if field[h][w] in USER:
                cur = [h, w]
                break
    
    for c in STRING:
        if c == 'S':
            field = launch(field, cur)
        else:
            field = move(field, cur, c)
    print(f'#{tc}', end=' ')
    for x in field:
        print(''.join(x))