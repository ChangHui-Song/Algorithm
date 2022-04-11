T = int(input())

for t in range(T):
    arr = list(input())
    tmp = list(set(arr))
    check = 0
    
    print("#" + str(t + 1), end=" ")
    if len(tmp) != 2:
        print("No")
        check = 1
    else:
        for x in tmp:
            if (arr.count(x) != 2):
                print("No")
                check = 1
    if not check:
        print("Yes")