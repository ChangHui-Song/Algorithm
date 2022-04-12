T = int(input())

for tc in range(T):
    n = int(input())
    string = input().rstrip()[:-1]
    string = string.replace('?', '.').replace('!', '.').split('.')
    
    for i in range(len(string)):
        string[i] = string[i].strip().split()
    
    print(f'#{tc + 1}', end=" ")
    for cur in string:
        res = 0
        for i in range(len(cur)):
            check = 0
            if cur[i][0].isupper():    
                for j in range(1, len(cur[i])):
                    if (not cur[i][j].islower()):
                        break
                else:
                    check = 1
            if check:
                res += 1
        print(res, end=" ")
    print()