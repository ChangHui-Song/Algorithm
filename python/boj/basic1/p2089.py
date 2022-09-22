from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    number = int(input())
    answer = ''
    while number:
        if number % -2 < 0:
            number = number // -2 + 1
            answer += str(1)
            continue
        number = number // -2
        answer += str(0)
    if not answer:
        answer += '0'
    print(answer[::-1])