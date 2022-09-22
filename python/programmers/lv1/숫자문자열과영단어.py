def solution(s :str):
    answer = 0
    numbers = ['zero', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine']
    for i in range(10):
        s = s.replace(numbers[i], str(i))
    answer = int(s)
    return answer