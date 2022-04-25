from sys import stdin
from collections import Counter

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    numbers = list(map(int, input().split()))
    number_dict = Counter(numbers)
    stack = []
    answer = []
    
    for index, number in enumerate(numbers):
        while stack and number_dict[number] > number_dict[stack[-1][1]]:
            answer.append((stack.pop()[0], number))
        stack.append((index, number))
    
    while stack:
        answer.append((stack.pop()[0], -1))
    
    answer = sorted(answer)
    answer = [str(number) for (index, number) in answer]
    print(' '.join(answer))