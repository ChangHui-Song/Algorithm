from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    
    number, B = map(int, input().split())
    answer = ''
    while (number):
        number, res = divmod(number, B)
        if res >= 10:
            answer += chr(res - 10 + 65)
            continue
        answer += str(res)
    print(answer[::-1])