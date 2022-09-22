T = int(input())

for t in range(T):
    d, l, n = map(int, input().split())
    res = d
    for i in range(n - 1):
        res += d + d * (1 + i) * (l / 100)
    print("#{0} {1}".format(t + 1, int(res)))