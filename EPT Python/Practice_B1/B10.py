a = 1

while a <= 1000:

    if a % 3 == 0 and a % 5 == 0 and a % 7 == 0:
        pass
    else:
        if a % 3 == 0 and a % 5 == 0: #35
            print(a) 
        else:
            if a % 3 == 0 and a % 7 == 0: #37
                print(a)
            else:
                if a % 5 == 0 and a % 7 == 0: #75
                    print(a)
                else :pass
    a = a + 1
