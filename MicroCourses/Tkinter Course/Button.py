from tkinter import *

root = Tk()

def myClick():
    myLabel = Label(root, text="Look I clicked a button!")
    myLabel.pack()


myButton = Button(root, text="click me", padx=50, pady=50, command=myClick )
myButton.pack()

root.mainloop()
