import sys

if __name__ == "__main__":
    data = list(map(int, sys.stdin.readline().split()))
    base = [1, 1, 2, 2, 2, 8]

    for i in range(len(data)):
        data[i] = base[i] - data[i]
    print(' '.join(map(str, data)))