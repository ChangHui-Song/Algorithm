PROMISE = 11 * 24 * 60 + 11 * 60 + 11

T = int(input())
answer = []

for _ in range(T):
    D, H, M = map(int, input().split())
    
    current_time = D * 24 * 60 + H * 60 + M
    if current_time - PROMISE < 0:
        answer.append(-1)
    else:
        answer.append(current_time - PROMISE)

for test_case in range(1, T + 1):
    print(f'#{test_case} {answer[test_case - 1]}')