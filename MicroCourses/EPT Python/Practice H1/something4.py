x = []
for i in range(0, 10):
    n = int(input(""))
    x.append(n)
for j in range(0, len(x)):
    for i in range(0, len(x)-1-j):
        if x[i] > x[i+1]:
            t = x[i]
            x[i] = x[i+1]
            x[i+1] = t
print(x)
x.sort()
