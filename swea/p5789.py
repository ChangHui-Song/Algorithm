T = int(input())

for test_case in range(1, T + 1):
    N, Q = map(int, input().split())
    boxes = ['0'] * (N + 1)
    for i in range(1, Q + 1):
        L, R = map(int, input().split())
        boxes = boxes[:L] + [str(i)] * (R - L + 1) + boxes[R + 1:]
    print(f'#{test_case} {" ".join(boxes[1:])}')