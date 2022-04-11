#nxn 정사각형 행렬 공간
#여행자의 시작 좌표는 (1,1) 좌/우/위/아래로 이동 가능
#단, nxn 행렬 공간을 벗어나는 이동은 무시됨

#%%
n = int(input());
plans = map(str, input().split())
x,y = 1, 1

# R R R U D D

#%%
px = [0, 0, -1, 1]
py = [-1, 1, 0, 0]

#%%
moves = ['L', 'R', 'U', 'D']

#%%
for plan in plans:
    for move in range(len(moves)):
        if plan == moves[move]:
            dx = x + px[move]
            dy = y + py[move]
            print(dx, dy)
    if dx>n or dy>n or dx<1 or dy<1:
        continue
    x, y = dx, dy
#%%
print(x, y)