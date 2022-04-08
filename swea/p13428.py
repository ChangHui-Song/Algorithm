def find_max(arr):
    tmp = list(arr)
    res = []
    
    while (len(tmp) and tmp[0] == max(tmp)):
        res.append(tmp.pop(0))
    if (len(tmp) > 1):
        max_idx = list(filter(lambda x: tmp[x] == max(tmp), range(len(tmp))))
        tmp[0], tmp[max_idx[-1]] = tmp[max_idx[-1]], tmp[0]
    return(''.join(res + tmp))

def find_min(arr):
    tmp = list(arr)
    res = []
    
    while (len(tmp) and tmp[0] == 1):
        res.append(tmp.pop(0))

t = int(input())

for test_case in range(1, t + 1):
    lst = list(input())
    print(find_min(lst), end=" ")
    print(find_max(lst))