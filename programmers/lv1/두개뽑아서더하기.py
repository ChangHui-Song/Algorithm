def solution(numbers):
    answer = []
    
    for i, num in enumerate(numbers):
        for j in range(i + 1, len(numbers)):
            answer.append(num + numbers[j])
    answer = sorted(list(set(answer)))
    return answer

print(solution([5,0,2,7]))