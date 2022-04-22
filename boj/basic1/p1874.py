from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    check = 1
    stack = []
    answer = ''
    
    for _ in range(N):
        current = int(input())
        if answer == 'NO':
            continue
        while check <= current:
            stack.append(check)
            check += 1
            answer += '+'
        if current == stack[-1]:
            answer += '-'
            stack.pop()
        else:
            answer = 'NO'
    if answer == 'NO':
        print(answer)
    else:
        for c in answer:
            print(c)