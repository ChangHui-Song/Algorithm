MAX = 1000000
sieve = [False, False] + [True] * (MAX - 1)
MAX_FIND = int(MAX ** 1/2)
for i in range(2, MAX_FIND + 1):
    if sieve[i] == True:
        for j in range(i + i, MAX + 1, i):
            sieve[j] = False
primes = [str(i) for i in range(2, MAX + 1) if sieve[i] == True]

T = int(input())
for test_case in range(1, T + 1):
    D, A, B = map(int, input().split())
    answer = 0
    
    i = 0
    while i < len(primes) and int(primes[i]) <= B:
        if int(primes[i]) >= A and str(D) in primes[i]:
            answer += 1
        i += 1
    print(f'#{test_case} {answer}')