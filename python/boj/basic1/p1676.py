import sys
sys.setrecursionlimit(100000)

def factorial(n):
    if not n:
        return 1
    return (n * factorial(n - 1))

if __name__ == '__main__':
    input = sys.stdin.readline
    answer = 0
    N = int(input())
    
    n_factorial = factorial(N)
    while (not n_factorial % 10):
        n_factorial //= 10
        answer += 1
    print(answer)