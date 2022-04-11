def find_max(arr):
    max_value = list(arr)
    for i in range(len(arr) - 1):
        for j in range(i + 1, len(arr)):
            arr[i], arr[j] = arr[j], arr[i]
            if (max_value < arr):
                max_value = list(arr)
            arr[i], arr[j] = arr[j], arr[i]
    return (''.join(max_value))

def find_min(arr):
    min_value = list(arr)
    for i in range(len(arr) - 1):
        for j in range(i + 1, len(arr)):
            arr[i], arr[j] = arr[j], arr[i]
            if (arr[0] != '0' and min_value > arr):
                min_value = list(arr)
            arr[i], arr[j] = arr[j], arr[i]
    return (''.join(min_value))

t = int(input())

for test_case in range(1, t + 1):
    lst = list(input())
    print("#" + str(test_case), end=" ")
    print(find_min(lst), end=" ")
    print(find_max(lst))