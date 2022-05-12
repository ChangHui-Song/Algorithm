for tc in range(1, 11):
    N = int(input())
    secrets = list(map(int, input().split()))
    S_N = int(input())
    inserts = list(map(str, input().split('I')))[1:]
    for i in range(S_N):
        inserts[i] = list(map(int, inserts[i].strip().split()))
    for insert in inserts:
        before = secrets[: insert[0]]
        after = secrets[insert[0]:]
        between = insert[2:2 + insert[1]]
        secrets = before + between + after
    print(f'#{tc} {" ".join(str(num) for num in secrets[:10])}')