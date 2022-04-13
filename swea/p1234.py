for tc in range(1, 11):
    n, numbers = input().split()
    n = int(n)
    i = 1
    
    while (i < n):
        if numbers[i - 1] == numbers[i]:
            numbers = numbers[:i - 1] + numbers[i + 1:]
            if (i > 0):
                i -= 1
                n -= 2
                continue
        i += 1
    print(f'#{tc} {numbers}')