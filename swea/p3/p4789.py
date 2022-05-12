T = int(input())

for test_case in range(1, T + 1):
    people = list(map(int, list(input().rstrip())))
    answer = 0
    count = 0
    
    for idx, n in enumerate(people):
        if count < idx:
            answer += idx - count
            count += idx - count
        count += n
    print(f'#{test_case} {answer}')