T = int(input())

mirror = {'b':'d', 'd':'b', 'q':'p', 'p':'q'}

for tc in range(1, T + 1):
    arr = list(input())
    answer = ''
    
    while arr:
        answer += mirror[arr.pop()]
    print(f'#{tc} {answer}')