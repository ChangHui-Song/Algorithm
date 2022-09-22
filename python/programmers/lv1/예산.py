def solution(d, budget):
    answer = 0
    d = sorted(d, reverse=True)
    while d and budget >= d[-1]:
        budget -= d.pop()
        answer += 1
    return answer

print(solution([1,3,2,5,4], 9))
print(solution([2,2,3,3], 10))