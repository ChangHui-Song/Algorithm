from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    mem = [0, 0, 1] + [0] * (N - 1)
    
    for i in range(3, N + 1):
        mem[i] = mem[i - 1] + 1
        if not i % 2:
            mem[i] = min(mem[i], mem[i // 2] + 1)
        if not i % 3:
            mem[i] = min(mem[i], mem[i // 3] + 1)
    print(mem[N])