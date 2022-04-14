# N x M 얼음 틀
# 구멍이 뚫린 부분 0, 칸막이가 존재하는 부분 1
# 0끼리 상하좌우로 붙은 경우는 한 개로 취급
# 생성되는 총 아이스크림의 개수는?

#%%
n, m = map(int, input().split())
# %%
array=[]
for i in range(n):
    array.append(list(map(int, input().split())))
cnt=0
# %%

def freeze(x,y):
    if x<=-1 or x>=n or y<=-1 or y>=m:
        return
    # 0이면 (음료수를 채울 수 있는 경우) True를 반환하고 방문 노드 포함 상하좌우 체크 및 방문처리 (1)
    if array[x][y] == 0:
        array[x][y] = 1
        freeze(x+1, y)
        freeze(x-1, y)
        freeze(x, y+1)
        freeze(x, y-1)
        return True
    return False


#%%
for i in range(n):
    for j in range(m):
        if freeze(i,j) == True:
            cnt+=1

#%%
print(cnt)

# %%
