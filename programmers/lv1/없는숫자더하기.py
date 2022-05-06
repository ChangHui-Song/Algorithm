def solution(numbers :list):
    answer = 45
    
    while numbers:
        answer -= numbers.pop()
    return answer

print(solution([1,2,3,4,6,7,8,0]))