arr = list(int(input()) for _ in range(9))

arr.sort()
flag = 0

for i in range(len(arr)):
    for j in range(i, len(arr)):
        if (sum(arr) - arr[i] - arr[j] == 100):
            flag = 1
            arr.pop(arr.index(arr[j]))
            arr.pop(arr.index(arr[i]))
            break
    if (flag):
        break

for x in arr:
    print(x)