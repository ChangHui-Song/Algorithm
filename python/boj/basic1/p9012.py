from sys import stdin
    
def check_vps(parenthesises :str):
    stack = list()
    for parenthesis in parenthesises:
        if parenthesis == '(':
            stack.append(parenthesis)
        else:
            if stack:
                stack.pop()
            else:
                return "NO"
    if stack:
        return "NO"
    return "YES"

if __name__ == '__main__':
    input = stdin.readline
    T = int(input())
    
    for _ in range(T):
        parenthesises = input().rstrip()
        print(check_vps(parenthesises))