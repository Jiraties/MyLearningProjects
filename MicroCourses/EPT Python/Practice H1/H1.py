a = []
#i = index
for i in range (0,10):
    n = int(input(""))
    a.append(n)
isEven = 0
for i in range(0,len(a)):
    if a[i] % 2 ==0:
        isEven = 1
        print ("have")
        break
if isEven == 0:
    print("don't have")