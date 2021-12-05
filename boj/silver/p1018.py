import sys

class Board_Check:
	def __init__(self):
		self.first_w_board = [
			"WBWBWBWB",
			"BWBWBWBW",
			"WBWBWBWB",
			"BWBWBWBW",
			"WBWBWBWB",
			"BWBWBWBW",
			"WBWBWBWB",
			"BWBWBWBW"
		]
		self.first_b_board = [
			"BWBWBWBW",
			"WBWBWBWB",
			"BWBWBWBW",
			"WBWBWBWB",
			"BWBWBWBW",
			"WBWBWBWB",
			"BWBWBWBW",
			"WBWBWBWB"
		]
	def first_w(self, board, x, y):
		tmp = 0

		for i in range(8):
			for j in range(8):
				if (board[x + i][y + j] != self.first_w_board[i][j]):
					tmp += 1
		return tmp

	def first_b(self, board, x, y):
		tmp = 0

		for i in range(8):
			for j in range(8):
				if (board[x + i][y + j] != self.first_b_board[i][j]):
					tmp += 1
		return tmp

if __name__ == "__main__":
	n, m = map(int, sys.stdin.readline().split())
	board = [list(sys.stdin.readline().rstrip()) for _ in range(n)]
	res = 65
	white = 0
	black = 0
	bc = Board_Check()

	for i in range(n - 8 + 1):
		for j in range(m - 8 + 1):
			white = bc.first_w(board, i, j)
			black = bc.first_b(board, i, j)
			if (white <= black and white < res):
				res = white
			elif (black < white and black < res):
				res = black
	print(res)