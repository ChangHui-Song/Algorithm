from sys import stdin

def carculator(num1, num2, operator):
    if operator == '+':
        return num1 + num2
    elif operator == '-':
        return num1 - num2
    elif operator == '*':
        return num1 * num2
    return num1 / num2

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    formula = list(input().rstrip())
    i = 0
    stack = []
    numbers = []
    
    for _ in range(N):
        numbers.append(int(input()))
    
    for operator in formula:
        if ord(operator) >= 65 and ord(operator) <= 90:
            stack.append(numbers[ord(operator) - 65])
            continue
        num2, num1 = stack.pop(), stack.pop()
        stack.append(carculator(num1, num2, operator))
    print(f'{stack[0]:.2f}')