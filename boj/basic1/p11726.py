from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    memory = [1, 1] + [0] * N
    
    for i in range(2, N + 1):
        memory[i] = memory[i - 1] + memory[i - 2]
    print(memory[N] % 10007)