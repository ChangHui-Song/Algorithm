t = int(input())

for test_case in range(1, t + 1):
    n = int(input())
    lst = list(map(int, input().split()))
    class_lst = lst.count(1)
    
    week, lest_class = divmod(n, class_lst)
    if (not lest_class):
        week -= 1
        lest_class = class_lst
    min_start = 7
    for i in range(7):
        tmp = 0
        j = i
        while (tmp != lest_class):
            if (lst[j % 7] == 1):
                tmp += 1
            j += 1
        if (j - i < min_start):
            min_start = j - i
    start = min_start
    res = week * 7 + min_start
    print("#" + str(test_case), end=" ")
    print(res)