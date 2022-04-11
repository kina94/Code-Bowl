# 8x8 좌표 평면
# 좌표를 입력받은 나이트는 수평(a~h, 열)과 수직(1~8, 행)으로만 이동 가능
# 수평 두 칸, 수직 한 칸 / 수평 한 칸, 수직 두 칸
# 좌표 평면 밖으로는 나가지 못함
# 나이트가 움직이는 경우의 수 출력

#%%
knight = str(input())
sx=int(ord(knight[0]))-int(ord('a'))+1
sy=int(knight[1])
steps = [[2,1], [2,-1], [-2,1], [-2,-1], [1,2], [-1,2], [1,-2], [-1,-2]]
count=0

#%%
for step in steps:
    dx= sx + step[0]
    dy= sy + step[1]
    if dx>8 or dy>8 or dx<1 or dy<1:
        continue
    count+=1

#%%
print(count)
# %%
