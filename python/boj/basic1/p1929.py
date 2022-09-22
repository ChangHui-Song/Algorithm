from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    M, N = map(int, input().split())
    sieve = [False, False] + [True] * (N - 1)
    
    for i in range(2, N + 1):
        if i >= M and sieve[i]:
            print(i)
        for j in range(i + i, N + 1, i):
            sieve[j] = False