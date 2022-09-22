t = int(input())

for test_case in range(1, t + 1):
    string = input()
    win = string.count('o')
    res = 15 - len(string) + win
    print("#" + str(test_case), end=" ")
    if (res >= 8):
        print("YES")
    else:
        print("NO")