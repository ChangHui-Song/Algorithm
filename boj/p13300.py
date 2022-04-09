N, K = map(int, input().split())
std = list([0, 0] for _ in range(6))
res = 0

for _ in range(N):
    sex, grade = map(int, input().split())
    std[grade - 1][sex] += 1

for i in range(6):
    res += std[i - 1][0] // K
    if (std[i - 1][0] % K):
        res += 1
    res += std[i - 1][1] // K
    if (std[i - 1][1] % K):
        res += 1
print(res)