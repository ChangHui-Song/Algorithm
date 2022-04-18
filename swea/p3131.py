N = 1000001

isprime = [True] * N

isprime[0], isprime[1] = False, False

for i in range(2, int(N ** 1/2)):
    for j in range(i * i, N, i):
        isprime[j] = False

for i in range(N):
    if isprime[i]:
        print(i, end=' ')