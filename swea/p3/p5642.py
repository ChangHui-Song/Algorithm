T = int(input())

for tc in range(T):
    N = int(input())
    lst = list(map(int, input().split()))
    max = lst[0]
    
    for i in range(N - 1):
        if (lst[i] >= 0 and lst[i] + lst[i + 1] >= 0):
            lst[i + 1] += lst[i]
        if (max < lst[i + 1]):
            max = lst[i + 1]
    print(lst)
    print(f"#{tc + 1} {max}")