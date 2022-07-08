w = float(input("weight(kg):"))
h = float(input("height(cm):"))
h = h/100
bmi = w/(h**2)
if bmi<20:
    print("THIN")
else:
    if bmi>25:
     print("FAT")
    else:
        print("NORMAL")
        
    
