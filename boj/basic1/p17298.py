from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    numbers = list(map(int, input().split()))
    stack = []
    answer = []
    
    for idx, number in enumerate(numbers):
        if not stack or stack[-1][1] >= number:
            stack.append((idx, number))
        else:
            while stack and stack[-1][1] < number:
                answer.append((stack.pop()[0], number))
            stack.append((idx, number))
    while stack:
        answer.append((stack.pop()[0], -1))
    answer = sorted(answer)
    answer = [number for (idx, number) in answer]
    print(' '.join(list(map(str, answer))))