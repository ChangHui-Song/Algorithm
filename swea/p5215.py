def check_calorie(idx, score, calorie):
    global max_score
    if calorie > L:
        return
    if score > max_score:
        max_score = score
    if idx == N:
        return
    check_calorie(idx + 1, score, calorie)
    check_calorie(idx + 1, score + arr[idx][0], calorie + arr[idx][1])

T = int(input())
for test_case in range(1, T + 1):
    N, L = map(int, input().split())
    arr = []
    for _ in range(N):
        arr.append(list(map(int, input().split())))
    arr= sorted(arr, key=lambda x:-x[1])
    max_score = 0
    
    check_calorie(0, 0, 0)
    print(f'#{test_case} {max_score}')