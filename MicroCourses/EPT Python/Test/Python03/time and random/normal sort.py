import time
import random
x = []
x = [1,2,3]
random.seed()
x.clear()
for  i in range (0,5000):
    x.append(random.randrange(10000))
start = time.time()
x.sort()
end = time.time()
use_t2 = end-start
print (use_t2)