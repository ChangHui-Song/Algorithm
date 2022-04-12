T = int(input())

for tc in range(T):
    N, R = map(int, input().split())
    up = 1
    down = 1
    
    for i in range(N - R + 1, N + 1):
        up *= i
    for i in range(1, R + 1):
        down *= i
    res = (up // down) % 1234567891
    print(f'#{tc + 1} {res}')