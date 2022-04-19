D = [
    '..#..',
    '.#.#.',
    '#.C.#',
    '.#.#.',
    '..#..']
D_RIGHT = [
    '.#..',
    '#.#.',
    '.C.#',
    '#.#.',
    '.#..'
]

T = int(input())

for test_case in range(1, T + 1):
    string = input().rstrip()
    answer = list(D)
    
    for idx, c in enumerate(string):
        if idx != 0:
            for i in range(5):
                answer[i] = answer[i] + D_RIGHT[i]
        answer[2] = answer[2][:4 * idx + 2] + c + answer[2][4 * idx + 3:]
    for x in answer:
        print(x)