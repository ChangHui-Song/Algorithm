import sys

if __name__ == "__main__":
    data = sys.stdin.readline().rstrip()
    data = data[::-1]
    result = 0

    for i, x in enumerate(data):
        if (ord(x) >= 65 and ord(x) <= 70):
            result += ((ord(x) - 55) % 16) * (16 ** i)
        else:
            result += (int(x) % 16) * (16 ** i)
    print(result)