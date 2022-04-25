from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    string = input().rstrip()
    counter = [0] * 26
    
    for character in string:
        counter[ord(character) - 97] += 1
    counter = [str(index) for index in counter]
    print(' '.join(counter))