from sys import stdin

MAX = 1000000
sieve = [False, False] + [True] * (MAX - 1)

for i in range(2, MAX + 1):
    if sieve[i]:
        for j in range(i + i, MAX + 1, i):
            sieve[j] = False

if __name__ == '__main__':
    input = stdin.readline
    T = int(input())
    primes = [i for i in range(MAX + 1) if sieve[i]]
    
    for _ in range(T):
        answer = 0
        N = int(input())
        i = 0
        while (primes[i] <= N - primes[i]):
            if sieve[primes[i]] and sieve[N - primes[i]]:
                answer += 1
            i += 1
        print(answer)