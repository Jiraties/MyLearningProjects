import sys

sys.stdout.write("*|")
i = 1
while i <= 9:
    sys.stdout.write("\t" + str(i))
    i+=1
print()
sys.stdout.write("-----------------------------------------------------------------------------")
print()
i = 1
while i<=9:
    sys.stdout.write(str(i)+"|")
    j = 1
    while j <=9:
        sys.stdout.write("\t" + str(i*j))
        j+=1
    print()
    i+=1