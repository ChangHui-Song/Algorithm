def solution(record :list):
    answer = []
    user_inout = []
    users = dict()
    
    for log in record:
        log = list(log.split())
        if log[0] == 'Enter' or log[0] == 'Leave':
            user_inout.append((log[0], log[1]))
        if log[0] == 'Enter' or log[0] == 'Change':
            users[log[1]] = log[2]
    
    for inout in user_inout:
        if inout[0] == 'Enter':
            answer.append(users[inout[1]] + "님이 들어왔습니다.")
        if inout[0] == 'Leave':
            answer.append(users[inout[1]] + "님이 나갔습니다.")
    
    return answer

print(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))