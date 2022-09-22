T = int(input())

for test_case in range(1, T + 1):
    L, R = map(int, input().split())
    answer = 0
    for i in range(L, R + 1):
        if int(i ** (1/2)) == i ** (1/2):
            current = str(i)
            root = str(int(i ** (1/2)))
            if current == current[::-1] and root == root[::-1]:
                answer += 1
                
    print(f'#{test_case} {answer}')