def solution(board, moves):
	answer = 0
	board_rotate = [[] for _ in range(len(board))]
	result = []
	for i in range(len(board)):
		for j in range(len(board[i])):
			if (board[i][j] != 0):
				board_rotate[j].append(board[i][j])
	for x in moves:
		if board_rotate[x-1]:
			result.append(board_rotate[x-1].pop(0))
		if len(result) >= 2 and result[-1] == result[-2]:
			result.pop()
			result.pop()
			answer +=2

	return answer

board = [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 2, 1, 0, 0], [0, 2, 1, 0, 0], [0, 2, 1, 0, 0]]
moves = [1, 2, 3, 3, 2, 3, 1]
print(solution(board, moves))
