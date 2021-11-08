import sys

if __name__ == "__main__":
    res = 0

    for i in range(5):
        res += int(sys.stdin.readline())
    print(res)