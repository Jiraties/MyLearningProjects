s = int(input("input your score"))
if s<50:
    print("F")
else:
    if s<60:
        print("D")
    else:
        if s<70:
            print("C")
        else:
            if s<80:
                print("B")
            else:
                print("A")
