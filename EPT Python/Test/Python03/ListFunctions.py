y = []
y.append(100)
y.append(107)
x = []
x.append(5)
x.append(7)

#adds y into x
x.extend(y)
#adding 6 into position 0
x.insert(0,6)
#removes the number in the position   
x.pop()
x.pop(2)
#removes every number in the list
x.clear()
#returns index in position
x.index()
#returns how many numbers in the list
x.count()
#sorts the list from least to most
x.sort()
#reverses the list
x.reverse()