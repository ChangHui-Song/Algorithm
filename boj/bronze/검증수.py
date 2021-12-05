import sys

if __name__ == "__main__":
    data = list(map(int, sys.stdin.readline().split()))
    res = 0

    for x in data:
        res += x * x
    print(res % 10)