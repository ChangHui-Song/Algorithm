T = int(input())

for tc in range(1, T + 1):
    number = input()
    back = 0
    front = round(int(number[:3]) / 100, 1)
    
    if front >= 10:
        front = round(front / 10, 1)
        back += 1

    back += len(number[1:])
    print(f'#{tc} {str(front) + "*10^" + str(back)}')