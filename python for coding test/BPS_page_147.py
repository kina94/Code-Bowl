#%%
from collections import deque

#%%
#BSF 정의
def bsf(graph, start, visited):
    queue=deque([start])
    visited[start]=True
    while queue:
        v=queue.popleft()
        print(v, end= ' ')
        
        #해당 원소와 연결된 방문하지 않은 원소 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i]=True

graph=[
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

visited=[False]*9

#%%
bsf(graph, 1, visited)
# %%
