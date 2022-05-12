T = int(input())

for tc in range(T):
    N = int(input())
    loads = []
    stops = []
    
    for _ in range(N):
        A, B = map(int, input().split())
        loads.append(A)
        loads.append(B)
    
    P = int(input())
    for _ in range(P):
        stops.append(int(input()))
    print(f"#{tc + 1}", end=" ")
    for stop in stops:
        res = 0
        for i in range(0, N * 2 - 1, 2):
            if stop >= loads[i] and stop <= loads[i + 1]:
                res += 1
        print(res, end=" ")
    print()