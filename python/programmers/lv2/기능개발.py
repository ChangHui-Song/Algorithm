def solution(progresses, speeds):
    answer = []
    rests = []
    for i in range(len(progresses)):
        rest = (100 - progresses[i]) // speeds[i]
        if (100 - progresses[i]) % speeds[i]:
            rest += 1
        rests.append(rest)
    cnt = 1
    max_rest = rests[0]
    for i in range(1, len(rests)):
        if max_rest >= rests[i]:
            cnt += 1
        else:
            answer.append(cnt)
            max_rest = rests[i]
            cnt = 1
    answer.append(cnt)
    
    return answer

print(solution([93, 30, 55], [1, 30, 5]))
print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))