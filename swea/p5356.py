T = int(input())

for test_case in range(1, T + 1):
    answer = [''] * 15
    
    for i in range(5):
        string = input().rstrip()
        for j in range(len(string)):
            answer[j] = answer[j] + string[j]
    print(f'#{test_case} {"".join(answer)}')