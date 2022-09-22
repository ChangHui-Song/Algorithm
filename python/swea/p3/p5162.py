T = int(input())

for test_case in range(1, T + 1):
    A, B, C = map(int, input().split())
    
    if A <= B:
        answer = C // A
    else:
        answer = C // B
    print(f'#{test_case} {answer}')