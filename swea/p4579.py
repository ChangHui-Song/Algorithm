T = int(input())
answer = []

for _ in range(T):
    string = input()
    result = 'Exist'
    for i in range(len(string) // 2):
        if string[i] == '*' or string[-(i + 1)] == '*':
            break
        if string[i] != string[-(i + 1)]:
            result = 'Not exist'
            break
    answer.append(result)

for test_case in range(1, T + 1):
    print(f'#{test_case} {answer[test_case - 1]}')