x = []
for  i in range (0,10):
    n = int(input(""))
    x.append(n)
max_x = x[0]
for y in x:
    if max_x< y:
        max_x = y
print (max_x)
p = 1
for y in x:
    p = p*y
print(p)

