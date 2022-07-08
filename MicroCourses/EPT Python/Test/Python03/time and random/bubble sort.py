import random
import time 
x = []
x = [1,2,3]
random.seed()
for i in range(0,5000):
    x.append(random.randrange(10000))
start = time.time()
#bubble sort
for j in range(0, len(x)):
    for i in range(0, len(x)-1-j):
        if x[i] > x[i+1]:
            t = x[i]
            x[i] = x[i+1]
            x[i+1] = t
end = time.time()
use_t1 = end - start
print (use_t1)
x.clear()
for  i in range (0,5000):
    x.append(random.randrange(10000))
start = time.time()
x.sort()
end = time.time()
use_t2 = end-start
print (use_t2)
