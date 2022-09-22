def solution(n :int):
    answer = ''
    while n:
        answer = str(n % 3)
        n = n // 3
    return int(answer, 3)

print(solution(45))