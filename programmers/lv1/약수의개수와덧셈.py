def solution(left, right):
    answer = 0
    divisor_count = [0] * (right + 1)
    
    for i in range(1, right + 1):
        j = i
        while (j <= right):
            divisor_count[j] += 1
            j += i
    
    for idx, num in enumerate(divisor_count[left:right + 1]):
        if not num % 2:
            answer += idx + left
        else:
            answer -= idx + left
    return answer

print(solution(13, 17))
print(solution(24, 27))