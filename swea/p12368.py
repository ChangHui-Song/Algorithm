T = int(input())

for t in range(T):
    time1, time2 = map(int, input().split())
    res = (time1 + time2) % 24
    print("#" + str(t + 1), end=" ")
    print(res)