n = int(input(""))
sum = 0
avg = 0
m = int(input(""))
min = m
max = m
sum = m
i = 0
while i<n-1:
    m=int(input(""))
    sum = sum+m
    if m < min:
        min = m
    if m > max:
        max = m
    i = i+1
avg = sum/n
print (avg)
print (min)
print (max)
