# DFS Algorithm
T = int(input())

def perm(n: int, arr: list):
    result = []
    if n > len(arr):
        return result

    if n == 1:
        for i in arr:
            result.append([i])
    elif n > 1:
        for i in range(len(arr)):
            ans = [i for i in arr]
            ans.remove(arr[i])
            for p in perm(n - 1, ans):
                result.append([arr[i]] + p)
    return result

for tc in range(1, T + 1):
    numbers = list(input().rstrip('\n'))
    check = 0
    if len(numbers) == 1:
        print(f'#{tc} impossible')
    else:
        check_number = perm(len(numbers), numbers)
        number = int(''.join(numbers))
        for num in check_number:
            if num[0] == '0':
                continue
            cur = int(''.join(num))
            if cur / number == 1:
                continue
            if cur // number == cur / number:
                print(f'#{tc} possible')
                check = 1
                break
        if not check:
            print(f'#{tc} impossible')