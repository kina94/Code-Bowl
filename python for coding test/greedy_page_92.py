#N개의 숫자가 주어지며, 숫자는 총 M번 더해짐
#한 숫자는 최대 K번까지 반복해서 더할 수 있음
#단, 인덱스가 다른 경우 다른 수로 취급함
#%%
n, m, k = map(int, input().split())
data = list(map(int, input().split()))
# %%
data.sort(reverse=True)
first = data[0]
second = data[1]
result=0;
# %%
count_first = (m // (k+1) * k) + (m % (k+1)) # 가장 큰 수가 더해지는 횟수
count_second = m - count_first # 두번째로 큰 수가 더해지는 횟수
#%%
result= (first*count_first) + (second*count_second)
#%%
print(result)