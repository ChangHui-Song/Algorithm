from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    lstack = list(input().rstrip())
    rstack = []
    N = int(input())
    
    for _ in range(N):
        comm = input().rstrip().split()
        if comm[0] == 'L' and lstack:
            rstack.append(lstack.pop())
        elif comm[0] == 'D' and rstack:
            lstack.append(rstack.pop())
        elif comm[0] == 'B' and lstack:
            lstack.pop()
        elif comm[0] == 'P':
            lstack.append(comm[1])
    print(''.join(lstack + rstack[::-1]))