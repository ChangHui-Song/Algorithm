from sys import stdin

input = stdin.readline

N = int(input())
arr = list(map(int, input().split()))
B, C = map(int, input().split())
result = 0

for candidate in arr:
    candidate = candidate - B
    result += 1
    if candidate > 0:
        result += candidate // C
        if candidate % C:
            result += 1
print(result)