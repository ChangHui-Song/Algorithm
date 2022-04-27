from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    cardpack = list(map(int, input().split()))
    memory = [0] * (N + 1)
    
    for i in range(1, N + 1):
        memory[i] = cardpack[i - 1]
        for j in range(1, i):
            if memory[i] > memory[j] + memory[i - j]:
                memory[i] = memory[j] + memory[i - j]
    print(memory[i])