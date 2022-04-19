T = int(input())

for test_case in range(1, T + 1):
    string = input().rstrip()
    H = int(input())
    positions = list(map(int, input().split()))
    
    positions = sorted(positions)
    while positions:
        position = positions.pop()
        if position == len(string):
            string = string + '-'
            continue
        string = string[:position] + '-' + string[position:]
    print(f'#{test_case} {string}')