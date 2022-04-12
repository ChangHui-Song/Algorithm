T = int(input())

for tc in range(T):
    N = int(input())
    lst = list(map(int, input().split()))
    result = -1
    
    for i in range(N):
        for j in range(i + 1, N):
            cur = str(lst[i] * lst[j])
            for k in range(1, len(cur)):
                if cur[k - 1] > cur[k]:
                    break
            else:
                if (result < int(cur)):
                    result = int(cur)
    print(f'#{tc + 1} {result}')