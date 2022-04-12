for _ in range(10):
    N = int(input())
    substring = input().rstrip()
    string = input().rstrip()
    
    print(f'#{N} {string.count(substring)}')