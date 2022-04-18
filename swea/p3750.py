T = int(input())
res = []

for tc in range(1, T + 1):
    N = input().rstrip()
    
    if int(N) < 10:
        res.append(N)
    else:
        s = sum(list(int(c) for c in N))
        while (s >= 10):
            s = sum(list(int(c) for c in str(s)))
        res.append(str(s))
for tc in range(1, T + 1):
    print(f'#{tc} {res[tc - 1]}')