T = int(input())
res = []

for tc in range(1, T + 1):
    N, M, K = map(int, input().split())
    visit = list(map(int, input().split()))
    visit = sorted(visit)
    check = 0

    for i in range(N):
        bread = (visit[i] // M) * K - (i + 1)
        if bread < 0:
            check = 1
            res.append('Impossible')
            break
    if not check:
        res.append('Possible')

for tc in range(1, T + 1):
    print(f'#{tc} {res[tc - 1]}')