import sys

# 문자열 처리

if __name__ == "__main__":
    t = int(sys.stdin.readline())
    for _ in range(t):
        h, w, n = map(int, sys.stdin.readline().split()) 
        floor = n%h if n%h != 0 else h
        num = n//h if floor != h else n//h-1
        print(str(floor), end='' '0'+str(num+1) if (num+1)//10 == 0 else str(num+1))
        print()