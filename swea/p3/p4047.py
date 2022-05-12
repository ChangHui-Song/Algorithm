PATTERN = ['S', 'D', 'H', 'C']

def count_card(input_cards):
    return 

T = int(input())
answer = []
for test_case in range(1, T + 1):
    CARD = input().rstrip()
    input_cards = [CARD[i:i + 3] for i in range(0, len(CARD), 3)]
    patterns = [0, 0, 0, 0]
    check = 0
    for card in input_cards:
        if input_cards.count(card) > 1:
            check = 1
            answer.append('ERROR')
            break
        else:
            patterns[PATTERN.index(card[0])] += 1
    if not check:
        answer.append(f'{13 - patterns[0]} {13 - patterns[1]} {13 - patterns[2]} {13 - patterns[3]}')

for test_case in range(1, T + 1):
    print(f'#{test_case} {answer[test_case - 1]}')