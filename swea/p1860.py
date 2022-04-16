T = int(input())
res = []

for tc in range(T):
    N, M, K = map(int, input().split())
    visit = list(map(int, input().split()))
    visit = sorted(visit, reverse=True)
    rest = 0
    i = 1
    check = 0
    if visit[-1] == 0:
        res.append('Impossible')
        continue
    while visit and i <= visit[0]:
        if not i % M:
            if not check:
                rest += K
        if not rest and visit[-1] == i:
            res.append('Impossible')
            break
        elif rest and visit[-1] == i:
            visit.pop()
            rest -= 1
            check = 1
            continue
        check = 0
        i += 1
    if not visit:
        res.append('Possible')
for tc in range(1, T + 1):
    print(f'#{tc} {res[tc - 1]}')