for tc in range(10):
    N = int(input())
    numbers = [list(map(int, input().split())) for _ in range(100)]
    max = 0
    
    for i in range(100):
        row = sum([numbers[j][i] for j in range(100)])
        cul = sum(numbers[i])
        if (row > max):
            max = row
        if (cul > max):
            max = cul
    n1 = sum([numbers[i][i] for i in range(100)])
    if (n1 > max):
            max = n1
    n2 = sum(numbers[i][99 - i] for i in range(99, -1, -1))
    if (n2 > max):
        max = n2
    print(f'#{N} {max}')