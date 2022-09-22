T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    lines = []
    answer = 0
    
    for i in range(N):
        L, R = map(int, input().split())
        lines.append((L, R))
    lines = sorted(lines, key= lambda x:x[0])
    
    for i in range(N):
        for j in range(i + 1, N):
            if lines[i][1] > lines[j][1]:
                answer += 1
    print(f'#{test_case} {answer}')