T = int(input())

for tc in range(1, T + 1):
    N, A, B = map(int, input().split())
    res = N * 0 + B * N
    
    for r in range(N):
        for c in range(r, N):
            if (r * c > N):
                break
            cur = A * abs(r - c) + B * (N - r * c)
            if (res > cur):
                res = cur
    print(f'#{tc} {res}')