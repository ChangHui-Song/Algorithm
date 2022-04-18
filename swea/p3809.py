T = int(input())
res = []
for tc in range(1, T + 1):
    N = int(input())
    s = ''
    while (len(s) != N):
        s = s + ''.join(input().split())
    i = 0
    while str(i) in s:
        i += 1
    res.append(i)
for tc in range(1, T + 1):
    print(f'#{tc} {res[tc - 1]}')