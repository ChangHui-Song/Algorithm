T = int(input())
answer = []

for _ in range(T):
    N = int(input())
    arr = [int(input()) for _ in range(N)]
    result = []
    
    result.append([arr[1] - 1, arr[1]])
    for i in range(2, N):
        check = 1
        for j, x in enumerate(result):
            if arr[i] - x[1] == x[0]:
                check = 0
                result[j][1] = arr[i]
        if check:
            result.append([arr[i] - 1, arr[i]])
    answer.append(len(result))

for test_case in range(1, T + 1):
    print(f'#{test_case} {answer[test_case - 1]}')