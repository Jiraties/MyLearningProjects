x = []
for i in range(0,10):
    n = int(input("please input"))
    x.append(n)
count = 0
i = 0
for  i in range (0,len(x)):
    if x[i]%2==0:
        count+=1
print (count)