T = int(input())

for tc in range(T):
    N = int(input())
    dump = []
    sum = 0
    result = 0
    
    for _ in range(N):
        cur = int(input())
        sum += cur
        dump.append(cur)
    avg = sum // N
    for i in range(N):
        if (avg < dump[i]):
            result += dump[i] - avg
    print(f"#{tc + 1} {result}")