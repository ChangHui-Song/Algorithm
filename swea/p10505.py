T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    incomes = list(map(int, input().split()))
    average = sum(incomes) // N
    answer = 0
    
    for income in incomes:
        if income <= average:
            answer += 1
    print(f'#{test_case} {answer}')