import sys
i = 1
while i <= 110:
    x = 0
    if i % 3 == 0:
        sys.stdout.write("Coza")
        x = 1
    if i % 5 == 0:
        sys.stdout.write("Loza")
        x = 1
    if i % 7 == 0:
        sys.stdout.write("Woza")
        x = 1
    if x == 0:
        sys.stdout.write(str(i))
    if i % 11 == 0:
        print()
    i = i+1
