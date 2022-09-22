from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    T = int(input())
    DIV = 1000000009
    MAX = 100000
    
    memory = [[0, 0, 0]]
    memory.append([1, 0, 0])
    memory.append([0, 1, 0])
    memory.append([1, 1, 1])
    for i in range(4, MAX + 1):
            memory.append([0, 0, 0])
            memory[i][0] = (memory[i - 1][1] + memory[i - 1][2]) % DIV
            memory[i][1] = (memory[i - 2][0] + memory[i - 2][2]) % DIV
            memory[i][2] = (memory[i - 3][0] + memory[i - 3][1]) % DIV

    for _ in range(T):
        N = int(input())
        print(sum(memory[N]) % DIV)