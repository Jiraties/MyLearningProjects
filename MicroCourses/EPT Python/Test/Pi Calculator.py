lastsum = 0
sum = 0
i = 1
while True:
    if 1 % 4 == 1:
        sum = sum+4*1/i
    else:
        sum = sum - 4*1/i
    if abs(sum-lastsum) < 0.0001:
        break
    lastsum=sum
    i += 2
print (sum)