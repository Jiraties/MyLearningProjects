sum = 0
avg = 0
n = int(input(""))
min = n
max = n
sum = n
i = 0
while i < 9:
    n = int(input(""))
    sum += n
    if n < min:
        min = n
    if n > max:
        max = n
    i = i + 1
avg = sum/10
print (avg)
print (min)
print (max)

