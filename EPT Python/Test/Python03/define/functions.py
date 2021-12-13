def power(a,b):
    sum = 1
    for i in range(1,b+1):
        sum = sum*a
    return sum
x = power(2,5)
print(x)
def fac(b):
    sum = 1
    for i in range(1,b+1):
        sum = sum*i
    return sum
x = fac(5)
print (x)
def my_sin(x):
    sum = 0
    i = 1
    while i<=17:
        if i%4==1:
            sum = sum+power(x,i)/fac(i)
        else:
            sum = sum - power(x,i)/fac(i)
        i = i+2
    return sum
print(my_sin(3.141592/2))
