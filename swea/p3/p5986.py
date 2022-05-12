sieve = [False, False] + [True] * 998
for i in range(2, int(999 ** 0.5) + 1):
    if sieve[i]:
        for j in range(i + i, 1000, i):
            sieve[j] = False
primes = [i for i in range(2, 999 + 1) if sieve[i]]
T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    answer = 0
    
    for i in range(len(primes)):
        for j in range(i, len(primes)):
            for k in range(j, len(primes)):
                if primes[i] + primes[j] + primes[k] == N:
                    answer += 1
    print(f'#{test_case} {answer}')