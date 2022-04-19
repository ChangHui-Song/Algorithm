from operator import isub


T = int(input())

for test_case in range(1, T + 1):
    N, K = map(int, input().split())
    submit = list(map(int, input().split()))
    isubmit = [True] + [False] * N
    answer = []
    
    for idx in submit:
        isubmit[idx] = True
    for i in range(1, N + 1):
        if not isubmit[i]:
            answer.append(str(i))
    print(f'#{test_case} {" ".join(answer)}')