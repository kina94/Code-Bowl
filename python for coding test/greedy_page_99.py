# 1. N-1
# 2. N / K
# 단 2번은 1번을 수행한 후 K로 나누어 떨어질 때만 수행할 수 있음
# N이 1이 될 때까지 1번과 2번을 수행하는 최소 횟수 구하기

#%%
n, k = map(int, input().split())
cnt = 0
#%%
while n>1:
    if (n % k == 0):
        n=n/k
        cnt+=1
    else:
        n = n-1
        cnt+=1
# %%
print(cnt)