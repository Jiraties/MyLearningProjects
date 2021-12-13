from tkinter import *

root = Tk()

# Creating a Label Widget
myLabel1 = Label(root, text = "Hello world!").grid(row = 0, column = 0)
myLabel2 = Label(root, text = "Hello my name is Jirat").grid(row = 1, column = 5)
myLabel2 = Label(root, text = "                      ").grid(row = 1, column = 1)


root.mainloop()