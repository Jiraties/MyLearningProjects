import sys
a = 1
while a < 11:
    b = 0
    while b <= 9-a:
        sys.stdout.write("-")
        b = b+1
    b = 0
    while b < a:
        sys.stdout.write("x")
        b = b+1
    print ()
    a = a+1
