T = int(input())

for tc in range(1, T + 1):
    N, M = map(int, input().split())
    arr1 = input().split()
    arr2 = input().split()
    tmp = list(set(arr1 + arr2))
    result = N + M - len(tmp)
    print(f'#{tc} {result}')