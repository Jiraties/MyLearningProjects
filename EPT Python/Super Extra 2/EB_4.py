a = 50e6
b = 70e6
year = 1
while True:
    a = a*1.03
    b = b*1.02
    if a > b:
        break
    year+=1
print(year)