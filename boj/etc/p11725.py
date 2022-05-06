from sys import stdin

if __name__ == '__main__':
    input = stdin.readline
    
    N = int(input())
    node = {i:[] for i in range(1, N + 1)}
    parent_node = [1, 1] + [0] * (N - 1)
    for _ in range(N - 1):
        n1, n2 = map(int, input().split()) 
        node[n1].append(n2)
        node[n2].append(n1)
    
    que = [1]
    while que:
        cur = que.pop(0)
        for n in node[cur]:
            if parent_node[n]:
                continue
            que.append(n)
            parent_node[n] = cur
    
    for i in range(2, N + 1):
        print(parent_node[i])