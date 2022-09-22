from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    
    for _ in range(N):
        A, B = map(int, input().split())
        num1, num2 = A, B
        if num1 < num2:
            num1, num2 = num2, num1
        while num1 % num2:
            num1, num2 = num2, num1 % num2
        print(A // num2 * B // num2 * num2)