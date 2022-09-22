import sys

if __name__ == "__main__":
    res = 0

    for i in range(4):
        res += int(sys.stdin.readline())
    print(res // 60)
    print(res % 60)