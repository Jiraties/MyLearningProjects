MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
    "money": 0,
}

def notEnough(item):
    print(f"Sorry there is not enough {item}")

def checkResource(orderIngredients):
    for item in orderIngredients:
        if orderIngredients[item] >= resources[item]:
            notEnough(item)
            return False
    return True

def processCoins():
    print("Please insert coins.")
    quarters = int(input("how many quarters: "))
    dimes = int(input("how many dimes?: "))
    nickles = int(input("how many nickles?: "))
    pennies = int(input("how many pennies?: "))
    
    return 0.25*quarters + 0.1*dimes + 0.05*nickles + 0.01*pennies

machineIsOn = True
while machineIsOn:
    userInput = input("What would you like? (espresso/latte/cappuccino): ")

    if userInput == "off":
        machineIsOn = False
    elif userInput == "report":
        for resource in resources:
            print(f"{resource}: {resources[resource]}")
    else:
        drink = MENU[userInput]
        if checkResource(drink["ingredients"]):
            money = processCoins()
            if money < MENU[userInput]["cost"]:
                print("Sorry that's not enough money. Money refunded")
            else:
                change = round(money - MENU[userInput]["cost"], 2)
                if change == 0:
                    print(f"Here is your {userInput}.")
                else:
                    print(f"Here is your {userInput}, and a change of ${change}")
                resources["money"] += MENU[userInput]["cost"]

                for ingredient in MENU[userInput]["ingredients"]:
                    resources[ingredient] -= MENU[userInput]["ingredients"][ingredient]