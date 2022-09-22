def solution(s :str):
    answer = 0
    if len(s) == 1:
        return 1
    for i in range(1, (len(s) // 2) + 1):
        word = s[:i]
        cnt = 0
        tmp = ''
        for j in range(i, len(s), i):
            if s[j:j + i] == word:
                cnt += 1
                continue
            if cnt:
                tmp += str(cnt + 1) + word
            else:
                tmp += word
            word = s[j:j + i]
            cnt = 0
        if cnt:
            tmp += str(cnt + 1) + word
        else:
            tmp += word
        if not answer or answer > len(tmp):
            answer = len(tmp)
    return answer

print(solution("a"))
print("answer=", solution("aabbaccc"))
print("answer=", solution("ababcdcdababcdcd"))
print("answer=", solution("abcabcdede"))
print("answer=", solution("abcabcabcabcdededededede"))
print("answer=", solution("xababcdcdababcdcd"))