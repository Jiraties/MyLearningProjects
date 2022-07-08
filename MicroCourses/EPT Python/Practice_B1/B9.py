a = 1
while a <= 100:
    if (a % 5 == 0 and
            a % 3 == 0):
        pass
    else:
        if (a % 3 == 0 or
                a % 5 == 0):
            print(a)
    a = a+1
