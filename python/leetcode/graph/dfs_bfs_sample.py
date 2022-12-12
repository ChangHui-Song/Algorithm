# dfs에서 리스트 조작없이 반복문(stack 이용)과 재귀로 구현한다면,
# 방문 순서가 다름 반복문은 stack을 사용하기 때문에 뒤에서부터 뽑아오지만
# 재귀는 앞에서 부터 쭉 아래로 내려가기 때문

graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3],
}

def iterative_dfs(start_v):
  discovered = []
  stack = [start_v]
  while stack:
    v = stack.pop()
    if v not in discovered:
      discovered.append(v)
      for w in graph[v]:
        stack.append(w)
  return discovered

def recursive_dfs(v, discovered=[]):
  discovered.append(v)
  for w in graph[v]:
    if w not in discovered:
      print(discovered)
      discovered = recursive_dfs(w, discovered)
  return discovered

def iterative_bfs(start_v):
  discovered = [start_v]
  queue = [start_v]
  while queue:
    v = queue.pop(0)
    for w in graph[v]:
      if w not in discovered:
        discovered.append(w)
        queue.append(w)
  return discovered

print(recursive_dfs(1))
print(iterative_dfs(1))