# 정수 N 입력
# 00시00분00초부터 N시59분59초까지 3이 단 하나라도 포함되어 있으면 카운트

#%%
n = int(input())
count=0;

#%%
for hour in range(n+1):
    for minute in range(60):
        for second in range(60):
            time = str(hour) + str(minute) + str(second)
            if '3' in time:
                count+=1

#%%
print(count)