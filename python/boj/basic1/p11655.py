from sys import stdin

def upper_rot(c):
    return chr((ord(c) - 65 + 13) % 26 + 65)

def lower_rot(c):
    return chr((ord(c) - 97 + 13) % 26 + 97)

if __name__ == '__main__':
    input = stdin.readline
    string = input().rstrip()
    answer = ''
    
    for c in string:
        if c.islower():
            c = lower_rot(c)
        elif c.isupper():
            c = upper_rot(c)
        answer += c
    print(answer)