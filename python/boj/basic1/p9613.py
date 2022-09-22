from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    T = int(input())
    
    for _ in range(T):
        numbers = list(map(int, input().split()))
        N, numbers = numbers[0], numbers[1:]
        answer = 0
        for i in range(N):
            for j in range(i + 1, N):
                num1, num2 = numbers[i], numbers[j]
                if num1 < num2:
                    num1, num2 = num2, num1
                while num1 % num2:
                    num1, num2 = num2, num1 % num2
                answer += num2
        print(answer)