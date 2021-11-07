import sys

if __name__ == "__main__":
    n, m = map(int, sys.stdin.readline().split())
    data = list(map(int, sys.stdin.readline().split()))

    for i, x in enumerate(data):
        data[i] = x - (n * m)
    print(' '.join(map(str, data)))