for tc in range(1, 11):
    N = int(input())
    secrets = list(map(int, input().split()))
    C = int(input())
    commends = list(map(str, input().replace("D", "I").split("I ")))[1:]
    for i in range(C):
        commends[i] = list(map(int, commends[i].strip().split()))
    
    for commend in commends:
        if len(commend) == 2:
            secrets = secrets[:commend[0]] + secrets[commend[0] + commend[1]:]
        else:
            secrets = secrets[:commend[0]] + commend[2:] + secrets[commend[0]:]
    print(f'#{tc} {" ".join(str(secrets[i]) for i in range(10))}')