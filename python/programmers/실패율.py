from collections import defaultdict

def solution(N, stages):
    answer = []
    current = [0 for i in range(N + 1)]
    fail_list = [[i + 1, 0] for i in range(N)]
    
    for i in range(N + 1):
        current[i] = stages.count(i + 1)
    for i in range(N):
        success = 0
        for j in range(i, N + 1):
            success += current[j]
        if (current[i]):
            fail_list[i][1] = current[i] * 100 / success
    fail_list = sorted(fail_list, key=lambda x : -x[1])
    for x in fail_list:
        answer.append(x[0])
    return answer

N = 5
stages = [2, 1, 2, 6, 2, 4, 3, 3]
solution(N, stages)