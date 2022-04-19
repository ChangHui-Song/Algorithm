T = int(input())

for test_case in range(1, T + 1):
    number = int(input())
    cube_root = round(number ** (1/3))
    answer = -1
    
    if cube_root ** 3 == number:
        answer = cube_root
    print(f'#{test_case} {answer}')