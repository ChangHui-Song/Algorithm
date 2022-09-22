T = int(input())

for tc in range(1, T + 1):
    N, D = map(int, input().split())
    answer = N // (D * 2 + 1)
    if N % (D * 2 + 1):
        answer += 1
    print(f'#{tc} {answer}')