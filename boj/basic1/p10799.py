from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    brackets = input().rstrip()
    stack = []
    answer = 0
    
    for i in range(len(brackets)):
        if brackets[i] == '(':
            stack.append(brackets[i])
        else:
            if brackets[i - 1] == '(':
                stack.pop()
                answer += len(stack)
            else:
                stack.pop()
                answer += 1
    print(answer)