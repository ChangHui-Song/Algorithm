T = int(input())
res = []
primes = [2]

for i in range(3, int(10000000 ** (0.5)), 2):
    check = 0
    for prime in primes:
        if not i % prime:
            check = 1
            break
    if (not check):
        primes.append(i)

for t in range(T):
    n = int(input())
    i = 0

    while (i < len(primes) and n >= primes[i] * primes[i]):
        if not n % (primes[i] * primes[i]):
            n //= primes[i] * primes[i]
        else:
            i += 1
    res.append(n)

for t in range(T):
    print(f'#{t + 1} {res[t]}')