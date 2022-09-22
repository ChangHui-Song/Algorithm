from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    print(bin(int(input(), 8))[2:])