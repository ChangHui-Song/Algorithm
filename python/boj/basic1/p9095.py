from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    T = int(input())
    for _ in range(T):
        N = int(input())
        memory = [1, 2, 4] + [0] * (N - 2)
        for i in range(3, N + 1):
            memory[i] = memory[i - 1] + memory[i - 2] + memory[i - 3]
        print(memory[N - 1])