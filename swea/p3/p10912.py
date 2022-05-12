T = int(input())

for t in range(T):
    res = []
    string = list(input())
    while (len(string)):
        check = 0
        cur = string.pop()
        for i in range(len(string)):
            if (cur == string[i]):
                check = 1
                string.pop(i)
                break
        if (not check):
            res.append(cur)
    print("#" + str(t + 1), end=" ")
    if (not res):
        print("Good")
    else:
        print(''.join(sorted(res)))