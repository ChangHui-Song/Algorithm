T = int(input())
answer = []

for tc in range(1, T + 1):
    n, p_d, p_g = map(int, input().split())
    
    if (p_g == 100 and p_d != 100):
        answer.append('Broken')
    elif (p_g == 0 and p_d != 0):
        answer.append('Broken')
    else:
        check = 0
        for today in range(1, n + 1):
            if (today * p_d / 100 == int(today * p_d / 100)):
                check = 1
                break
        if (check):
            answer.append('Possible')
        else:
            answer.append('Broken')

for tc in range(1, T + 1):
    print(f'#{tc} {answer[tc - 1]}')