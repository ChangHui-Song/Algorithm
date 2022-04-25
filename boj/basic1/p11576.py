from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    A, B = map(int, input().split())
    N = int(input())
    a_number = list(map(int, input().split()))
    answer = []
    number = 0
    for i in range(N):
        number += a_number[i] * (A ** (N - i - 1))
    while (number):
        number, rest = divmod(number, B)
        answer.append(str(rest))
    if not answer:
        answer.append('0')
    print(' '.join(answer[::-1]))