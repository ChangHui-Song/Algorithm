from collections import deque as dq

def solution(n, k, cmd):
    answer = "O" * n
    del_lst = []

    lst = dq(i for i in range(n))
    while (k):
        lst.append(lst.popleft())
        k -= 1
    for x in cmd:
        if (x[0] == "D" or x[0] == "U"):
            x_sp = x.split(' ')
            op, cnt = x_sp[0], int(x_sp[1])
            if (x[0] == "D"):
                for _ in range(cnt):
                    lst.append(lst.popleft())
            if (x[0] == "U"):
                for _ in range(cnt):
                    lst.appendleft(lst.pop())
        elif (x == "C"):
            del_node = lst.popleft()
            if (lst and del_node > max(lst)):
                lst.appendleft(lst.pop())
            del_lst.append(del_node)
        else:
            cur = del_lst.pop()
            lst = list(lst)
            if (not lst):
                lst.append(cur)
            elif (min(lst) > cur):
                lst1 = lst[:lst.index(min(lst))]
                lst2 = lst[lst.index(min(lst)):]
                lst1.append(cur)
                lst = lst1 + lst2
            elif (max(lst) < cur):
                lst1 = lst[:lst.index(max(lst))]
                lst2 = lst[lst.index(max(lst)):]
                lst1.append(cur)
                lst = lst1 + lst2
            else:
                for i in range(len(lst) - 1):
                    if (lst[i] < cur and lst[i + 1] > cur):
                        break
                lst1 = lst[:i + 1]
                lst2 = lst[i + 1:]
                lst1.append(cur)
                lst = lst1 + lst2
            lst = dq(lst)
    min_idx = min(lst)
    while (lst[0] != min_idx):
        lst.append(lst.popleft())
    for x in del_lst:
        answer = answer[:x] + "X" + answer[x + 1:]
    return answer

print(solution(8, 5, ["C"]))