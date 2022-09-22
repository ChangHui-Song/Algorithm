T = int(input())

for tc in range(T):
    n, m = map(int, input().split())
    res = 0
    for _ in range(n):
        m, r = divmod(m, 2)
        if r:
            res += 1
    print(f'#{tc + 1}', end=" ")
    if res == n:
        print("ON")
    else:
        print("OFF")