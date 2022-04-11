T = int(input())

for t in range(T):
    string = input().rstrip()
    a, b = 1, 1
    
    for x in string:
        if (x == 'L'):
            b += a
        else:
            a += b
    print("#{0} {1} {2}".format(t + 1, a, b))