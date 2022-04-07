# N X M 형태의 카드 배열
# 원하는 카드가 포함된 행을 선택
# 해당 행에서 가장 작은 숫자의 카드를 선택해야 함
# 해당 행에서 가장 작은 숫자를 선택해야 하지만, 세 개의 행 중 가장 큰 숫자를 가진 카드가 뽑혀야 정답임
# 즉, N개의 행의 최소값을 비교해 나가면서 최종적으로 가장 큰 최소값 찾기

#%%
n, m = map(int, input().split())
max_min = 0;

#%%
for i in range(n):
    data = list(map(int, input().split()))
    min_data = min(data)
    if min_data > max_min:
        max_min=min_data;
    #result = max(max_min, min_data)

print(max_min);
# %%
