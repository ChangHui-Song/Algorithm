t = int(input())
res = []

for test_case in range(1, t + 1):
    x1, x2, y1, y2 = map(int, input().split())
    res.append(min(x2, y2) - max(x1, y1))

for test_case in range(t):
    print("#" + str(test_case + 1), end=" ")
    if (res[test_case] < 0):
        print(0)
    else:
        print(res[test_case])