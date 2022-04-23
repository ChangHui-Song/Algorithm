from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    answer = ''
    string = input().rstrip()
    stack = ''
    
    for c in string:
        if c == '<':
            temp = stack.split()
            for i, s in enumerate(temp):
                temp[i] = s[::-1]
            answer += ' '.join(temp)
            stack = ''
        stack += c
        if stack[0] == '<' and stack[-1] == '>':
            answer += stack
            stack = ''
    if stack:
        temp = stack.split()
        for i, s in enumerate(temp):
            temp[i] = s[::-1]
        answer += ' '.join(temp)
    print(answer)