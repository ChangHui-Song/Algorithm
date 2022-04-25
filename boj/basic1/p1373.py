from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    print(oct(int(input(), 2))[2:])