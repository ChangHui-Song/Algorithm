# 스택의 구조를 파악해보는 문제
from sys import stdin

# stack class 정의
class Stack:
    def __init__(self):
        self.st = []
        self.length = 0

    def push(self, number :str):
        self.st.append(number)
        self.length += 1
    
    def pop(self):
        if self.length == 0:
            print(-1)
            return
        print(self.st.pop())
        self.length -= 1
    
    def size(self):
        print(self.length)
    
    def empty(self):
        if self.length == 0:
            print(1)
            return
        print(0)
    
    def top(self):
        if self.length == 0:
            print(-1)
            return
        print(self.st[-1])

# 변수 삽입을 위한 함수
def insert_operator(st :Stack, operator :str):
    if 'push' in operator:
        op, number = operator.split()
        st.push(number)
    elif 'pop' == operator:
        st.pop()
    elif 'size' == operator:
        st.size()
    elif 'empty' == operator:
        st.empty()
    elif 'top' == operator:
        st.top()

if __name__ == '__main__':
    input = stdin.readline
    N = int(input())
    st = Stack()

    for _ in range(N):
        operator = input().rstrip()
        insert_operator(st, operator)