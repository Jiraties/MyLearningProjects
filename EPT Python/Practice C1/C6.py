import sys
a = 1
while a <= 10:
    b = 0
    while b <= 8-a+1:
        sys.stdout.write("-")
        b = b+1
    if a % 2 == 1:
        b = 2*a-1
        while b > 0:
            sys.stdout.write(str(b))
            b = b-1
    else:
        b = 1
        while b <= 2*a-1:
            sys.stdout.write(str(b))
            b = b+1
    print()
    a = a+1
