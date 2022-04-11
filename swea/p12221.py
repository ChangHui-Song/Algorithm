T = int(input())

for t in range(T):
    num1, num2 = map(int, input().split())
    
    print("#" + str(t + 1), end=" ")
    if (num1 < 10 and num2 < 10):
        print(num1 * num2)
    else:
        print(-1)