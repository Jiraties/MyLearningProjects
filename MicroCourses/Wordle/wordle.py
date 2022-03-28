import random
from termcolor import colored
import os

words = ["hello", "think", "scale", "field"]
clear = lambda: os.system('clear')

def wordle():
    randomWord = random.choice(words)
    attempts = 6

    while attempts:
        print(colored(f"DEBUG The word is: {randomWord}", "red"))
        userInput = input(str()).lower()
        if len(userInput) == 5:
            for charIndex in range(len(randomWord)):
                if userInput[charIndex] == randomWord[charIndex]:
                    print(f"{userInput[charIndex]} is at the right place")

            if randomWord == userInput:
                print(colored("CORRECT!", "green"))
                return
            else:
                attempts -= 1
                print(f"attempts: {attempts}")

        else:
            print("Guess must be 5 letters long")
        




wordle()