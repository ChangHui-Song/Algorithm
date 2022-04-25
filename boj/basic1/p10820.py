from sys import stdin

if __name__ == '__main__':
    while True:
        try:
            count = [0] * 4
            string = input().rstrip('\n')
            if not string:
                break
            for character in string:
                if ord(character) >= ord('a') and ord(character) <= ord('z'):
                    count[0] += 1
                elif ord(character) >= ord('A') and ord(character) <= ord('Z'):
                    count[1] += 1
                elif ord(character) >= ord('0') and ord(character) <= ord('9'):
                    count[2] += 1
                else:
                    count[3] += 1
            count = [str(index) for index in count]
            print(' '.join(count))
        except EOFError:
            break