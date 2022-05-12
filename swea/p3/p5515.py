T = int(input())

for test_case in range(1, T + 1):
    M, D = map(int, input().split())
    month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    days = sum(month[:M - 1]) + D
    answer = (days + 3) % 7
    print(f'#{test_case} {answer}')