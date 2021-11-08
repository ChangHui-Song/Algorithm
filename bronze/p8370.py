import sys

if __name__ == "__main__":
    data = list(map(int, sys.stdin.readline().split()))
    res = 0

    for i in range(0, len(data), 2):
        res += data[i] * data[i + 1]
    print(res)