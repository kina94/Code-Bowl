# N x M 미로
# 시작 위치는 (1,1)이고 출구는 (N,M)에 존재
# 괴물이 있는 곳은 0, 없는 곳은 1로 표기
# 탈출하기 위해 움직여야 하는 최소 칸의 개수
# 가장 가까운 곳부터 탐색해서 빨리 탈출해야 하기 때문에 BPS가 적합함

#%%
from collections import deque
#%%
n, m = map(int, input().split())

#%%
array=[]
for i in range(n):
    array.append(list(map(int, input().split())))

#%%
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

#%%
def escape(x, y):
    queue=deque()
    queue.append((x,y))

    while queue:
        x, y = queue.popleft()
        for i in range(4): # 현재 위치에서 네 방향 확인
            nx = x + dx[i]
            ny = y + dy[i]
            if nx<0 or nx>=n or ny<0 or ny>=m: #미로를 벗어난 경우 무시
                continue
            if array[nx][ny] == 0: #괴물이 있는 경우 무시
                continue
            if array[nx][ny] == 1:
                array[nx][ny] = array[x][y] + 1 #괴물이 없는 칸을 방문하면 +1 (카운트 겸 방문 기록)
                queue.append((nx,ny))

    return array[n-1][m-1]
#%%
print(escape(0,0))
# %%