T = int(input())

for test_case in range(1, T + 1):
    N, A, B = map(int, input().split())
    maximum = min(A, B)
    minimum = 0
    if abs(A + B) > N:
        minimum = abs(A + B) - N
    print(f'#{test_case} {maximum} {minimum}')