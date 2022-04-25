from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    N, S = map(int, input().split())
    bros = list(map(int, input().split()))
    bros = [abs(bro - S) for bro in bros]
    
    i = 0
    max_gcd = bros[0]
    while (i < N):
        bro = bros[i]
        if bro < max_gcd:
            bro, max_gcd = max_gcd, bro
        while (bro % max_gcd):
            bro, max_gcd = max_gcd, bro % max_gcd
        i += 1
    print(max_gcd)