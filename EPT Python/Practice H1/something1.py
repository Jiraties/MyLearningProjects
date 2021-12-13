x = []
for i in range (0,10):
    n = int(input("please input:"))
    x.append(n)
i = len(x) - 1
while i >= 0:
    print(x[i])
    i = i-1
print(x)
x.reverse()
print (x)
for i in reversed(range(0,len(x))):
    print(x[i])

for a in reversed(x):
    print (a)