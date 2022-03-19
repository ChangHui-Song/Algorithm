def solution(msg):
	answer = []
	i = 1
	
	hash_dict = dict()
	while (i < 28):
		hash_dict[chr(ord('A') + i - 1)] = i
		i += 1
	i -= 1
	j = 0
	while (j < len(msg)):
		tmp = msg[j]
		for k in range(j + 1, len(msg)):
			tmp += msg[k]
			if tmp not in hash_dict:
				print(tmp)
				hash_dict[tmp] = i
				if (len(tmp) - 1 > 1):
					j += k - 1
				i += 1
				answer.append(hash_dict[tmp[:-1]])
				break
		j += 1
	answer.append(hash_dict[msg[-1]])
	return (answer)

solution("ABABABABABABABAB")