T = int(input())
for test_case in range(1, T + 1):
    numbers = list(map(int, input().split()))
    sum_list = []
    
    for i in range(7):
        for j in range(i + 1, 7):
            for k in range(j + 1, 7):
                sum_list.append(numbers[i] + numbers[j] + numbers[k])
    sum_list = sorted(list(set(sum_list)), reverse=True)
    print(f'#{test_case} {sum_list[4]}')