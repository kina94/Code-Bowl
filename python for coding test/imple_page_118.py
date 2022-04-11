# n x m 좌표평면, 캐릭터의 첫 좌표(A,B / 육지여야 함), 캐릭터가 바라보는 방향 d (북동남서 / 0123)
# 캐릭터 좌표는 A는 북쪽에서부터 떨어진 칸, B는 서쪽에서부터 떨어진 칸임
# N개의 줄에 맵의 상태가 북에서 남 순서대로 주어짐
# 1은 바다, 0은 육지
# 외곽은 다 바다
# 1) 캐릭터가 바라본 방향을 기준으로 왼쪽 방향부터 차례대로 시작
# 2) 왼쪽 방향에 가보지 않은 칸이 있으면 한 칸 전진 / 가보지 않은 칸이 없다면 1로 돌아가기
# 3) 모두 가본 칸, 바다인 경우 한 칸 뒤로 가고 1로 돌아가기 / 뒤가 바다면 멈추기
# 첫째 줄에 이동을 마친 후 캐릭터가 방문한 칸의 수 출력

#%%
n, m = map(int, input().split()) #좌표평면
x, y, direction = map(int, input().split()) #캐릭터의 좌표, 방향
visited = [[0]*m for _ in range(n)] #이미 방문한 곳을 체크하기 위한 맵
visited[x][y]=1 #현재 캐릭터가 서있는 곳 방문 처리

# 북동남서 좌표 이동 처리
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

#맵 설정
current_map=[]
for i in range(n):
    cm = list(map(int, input().split()))
    current_map.append(cm)

#%%
#변수 초기화
count = 1
turn_count = 0 # 4인 경우(모두 들린 경우) 체크에 필요

#%%
#왼쪽 방향으로 회전
def turn_left():
    global direction
    direction=direction+1
    if direction > 3 :
        direction=0

#%%
#시뮬레이션
while True:
    turn_left()
    #앞으로 나아가야 할 방향
    nx = x + dx[direction]
    ny = y + dy[direction]
    if visited[nx][ny]==0 and current_map[nx][ny]==0: #가보지 않고 육지인 경우
        visited[nx][ny]=1
        x = nx
        y = ny
        count+=1
        turn_count=0
        continue
    else: #가보지 않거나 바다인 경우
        turn_count+=1
    if turn_count==4: #모두 가본 경우
        nx = x - dx[direction]
        nx = y - dx[direction]
        if current_map[nx][ny]==0:
            x=nx
            y=ny
        else:
            break
        turn_count=0

#%%
#결과 출력
print(count)
# %%
