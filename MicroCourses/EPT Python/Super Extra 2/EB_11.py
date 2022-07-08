sum = 0
count = 0
while True:
    n = int(input(""))
    if n>0:
        sum = sum+n
        count+=1
    elif n==0 :
        break
    else:
        print("ERROR")
if sum ==0:
    print("NO AVERAGE")
else:
    avg = sum/count
    print(avg)



