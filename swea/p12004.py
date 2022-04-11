T = int(input())

for t in range(T):
    num = int(input())
    check = 0
    print("#" + str(t + 1), end=" ")
    for i in range(1, 10):
        q, r = divmod(num, i)
        if (not r and q < 10):
            print("Yes")
            check = 1
            break
    if (not check):
        print("No")