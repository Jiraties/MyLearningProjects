import sys

a = 0
b = 0
while a < 10:
    b = 0
    while b <= 8 - a:
        sys.stdout.write("-")
        b = b + 1
    b = 0
    while b <= a * 2:
        sys.stdout.write("x")
        b = b + 1
    print()
    a = a + 1
