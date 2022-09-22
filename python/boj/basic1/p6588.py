from sys import stdin

if __name__ == '__main__':
    MAX_NUM = 1000000
    input = stdin.readline
    seive = [False, False] + [True] * (MAX_NUM - 1)
    
    for i in range(2, MAX_NUM):
        if seive[i]:
            for j in range(i + i, MAX_NUM, i):
                seive[j] = False
    n = 1
    while n:
        n = int(input())
        for i in range(3, MAX_NUM, 2):
            if seive[i] and n - i != 2 and seive[n - i]:
                print(f'{n} = {i} + {n - i}')
                break