def recursive(N, M):
    if (M == 0):
        return (1)
    return (N * recursive(N, M - 1))

if __name__ == '__main__':
    for _ in range(10):
        T = int(input())
        N, M = map(int, input().split())
        print(f'#{T} {recursive(N, M)}')