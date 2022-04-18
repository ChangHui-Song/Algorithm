T = int(input())
answer = []

for _ in range(T):
    string = input().rstrip()
    length = len(string)
    check = 0
    left = string[:length // 2]
    if length % 2:
        right = string[length // 2 + 1:]
    else:
        right = string[length // 2:]

    for i in range(length // 2):
        if left[i] != right[-(i + 1)] and left[i] != '?' and right[-(i + 1)] != '?':
            answer.append('Not exist')
            check = 1
            break
    if not check:
        answer.append('Exist')

for test_case in range(1, T + 1):
    print(f'#{test_case} {answer[test_case - 1]}')