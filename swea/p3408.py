T = int(input())

for tc in range(1, T + 1):
    N = int(input())
    
    sum = N * (N + 1) // 2
    print(f'#{tc} {sum} {N * N} {sum * 2}')