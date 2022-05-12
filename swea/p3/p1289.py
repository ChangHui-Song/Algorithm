T = int(input())

for tc in range(1, T + 1):
    mem = input().rstrip()
    check = '0'
    res = 0
    tmp = str(mem)

    for i in range(len(mem)):
        if mem[i] != check:
            res += 1
            if check == '0':
                tmp = tmp[:i] + '1' * (len(mem) - i)
                check = '1'
            else:
                tmp = tmp[:i] + '0' * (len(mem) - i)
                check = '0'
    print(f'#{tc} {res}')