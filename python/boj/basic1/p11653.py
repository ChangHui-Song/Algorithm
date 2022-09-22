from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    number = int(input())
    current = 2

    while (number > 1):
        if not number % current:
            number //= current
            print(current)
            continue
        current += 1