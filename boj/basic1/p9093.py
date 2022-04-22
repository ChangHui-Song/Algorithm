# 문자열을 받으면 하나의 문자마다 뒤집는 문제
from sys import stdin

def reverse_word(word :str):
    return word[::-1]

if __name__ == '__main__':
    input = stdin.readline
    T = int(input())
    
    for _ in range(T):
        words = input().split()
        for idx, word in enumerate(words):
            words[idx] = reverse_word(word)
        print(' '.join(words))