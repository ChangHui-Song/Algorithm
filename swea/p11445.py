T = int(input())

for t in range(T):
    str1 = ''.join(input().split())
    str2 = ''.join(input().split())
    check = 0
    
    for i in range(len(str1)):
        if (str1[i] != str2[i]):
            check = 1
            break
    print("#" + str(t + 1), end=" ")
    if (not check and len(str1) + 1 == len(str2) and str2[-1] == 'a'):
        print("N")
    else:
        print("Y")