import math
n = int (input(""))
sum = 0
a = 1

while a<=n:
    sum = sum+1/a**2
    a = a+1

sum = sum*6
sum = math.sqrt(sum)
print (sum)