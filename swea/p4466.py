T = int(input())

for tc in range(1, T + 1):
    N, K = map(int, input().split())
    scores = list(map(int, input().split()))
    
    print(f'#{tc} {sum(sorted(scores, reverse=True)[:K])}')