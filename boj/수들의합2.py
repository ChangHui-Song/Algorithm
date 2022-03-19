import sys

if __name__ == '__main__':
    input = sys.stdin.readline
    n, m = map(int, input().split())
    arr = list(map(int, input().split()))
    answer = 0

    p1, p2 = 0, 0
    
    while (p1 < len(arr) and p2 < len(arr)):
        
        tmp = sum(arr[p1:p2 + 1])
        if tmp < m:
            p2 += 1
        elif tmp == m:
            p2 += 1
            answer += 1
        else:
            p1 += 1
    print(answer)