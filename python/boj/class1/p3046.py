import sys

if __name__ == "__main__":
    n, m = map(int, sys.stdin.readline().split())
    print((m * 2) - n)