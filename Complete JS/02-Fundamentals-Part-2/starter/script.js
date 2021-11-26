"use strict";
///////////////////////////////////////
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "534";
// const private = "Audio";

///////////////////////////////////////

function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

///////////////////////////////////////

// Function declaration - Can be called before declaring
// 
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression - Can't be called before declaring
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

///////////////////////////////////////

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1980, "Bob"));

///////////////////////////////////////

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

///////////////////////////////////////

const calcAge = function(birthYear) {
    return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear,
firstName)  {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
};
console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1950, "Mike"));

///////////////////////////////////////
// Coding challenge #1

// test 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (firstTeamAvg, secondTeamAvg) => {
    if (firstTeamAvg >= (secondTeamAvg * 2)) {
        return `Dolphins won (${firstTeamAvg} vs ${secondTeamAvg})`
    } else if (secondTeamAvg >= (firstTeamAvg * 2)) {
        return `Koalas won (${secondTeamAvg} vs ${firstTeamAvg})`
    } else {
        return `Sadly nobody won :/ (${firstTeamAvg} vs ${secondTeamAvg})`
    }
}

let dolphinsAvg = calcAverage(44,23,71);
let koalasAvg = calcAverage(65,54,49);

console.log(checkWinner(dolphinsAvg, koalasAvg))

// test 2
dolphinsAvg = calcAverage(85,54,41);
koalasAvg = calcAverage(23,34,27);

console.log(checkWinner(dolphinsAvg, koalasAvg))

///////////////////////////////////////

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["bob", "Alice"]

const firstName = "Jonas";
const jonas = [ firstName, "Schmedtmann", 2037 - 1991, friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);

///////////////////////////////////////

const friends = ["Micheal", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); // Last
console.log(friends);
console.log(newLength);

friends.unshift("John"); // First
console.log(friends);

// Remove elements
const popped = friends.pop(friends); // Last
console.log(popped)
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// Checks if its there or not
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

///////////////////////////////////////
// Coding challenge #2

// const calcTip = bill => {
//     let tip;
//     if (bill <= 300 && bill >= 50) {
//         tip = bill * 0.15
//         return tip;
//     } else {
//         tip = bill * 0.2
//         return tip;
//     }
// }

// Ternary operator
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals);

///////////////////////////////////////

const jonas = {
    firstname: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};

///////////////////////////////////////

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas);

// Dot notation
console.log(jonas.lastName);
// Bracket notation
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey);

// const interestedIn = prompt("What do you want to know about Jonas? Chose between firstName, lastName, age, job and friends");
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request! Chose between firstName, lastName, age, job and friends")
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

///////////////////////////////////////

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicensee: true,

    // Object method
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicensee === true ? "a" : "no"} driver's license`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
console.log(jonas.getSummary());

///////////////////////////////////////

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI:  function() {
        return this.mass / this.height ** 2;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI:  function() {
        return this.mass / this.height ** 2;
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
}

// if (john.)
// console.log(`John's BMI (${john.calcBMI()}) is`)

///////////////////////////////////////

// console.log("Lifting weights repitition 1");
// console.log("Lifting weights repitition 2");
// console.log("Lifting weights repitition 3");
// console.log("Lifting weights repitition 4");
// console.log("Lifting weights repitition 5");
// console.log("Lifting weights repitition 6");
// console.log("Lifting weights repitition 7");
// console.log("Lifting weights repitition 8");
// console.log("Lifting weights repitition 9");
// console.log("Lifting weights repitition 10");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep ++) {
    console.log(`Lifting weights repetition ${rep}`);
}

///////////////////////////////////////

const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length ;i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue
console.log("--- ONLY STRINGS ---")

for (let i = 0; i < jonas.length ;i++) {
    if (typeof jonas[i] !== "string") continue;

    console.log(jonas[i], typeof jonas[i]);
}
// break
console.log("--- BREAK WITH NUMBER ---")

for (let i = 0; i < jonas.length ;i++) {
    if (typeof jonas[i] == "number") break;

    console.log(jonas[i], typeof jonas[i]);
}

///////////////////////////////////////

const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

// Looping backwards

for (let i = jonas.length - 1; i >= 0; i--) { 
    console.log(jonas[i]);
}

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`-------- Starting excercise ${excercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`)
    }
}

///////////////////////////////////////

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }

let rep = 1;
while (rep <=10) {
    // console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
}
*/
///////////////////////////////////////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
    let tip;
    if (bill <= 300 && bill >= 50) {
        tip = bill * 0.15
        return tip;
    } else {
        tip = bill * 0.2
        return tip;
    }
}

let i = 0;
while (tips.length < bills.length) {
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
    i++;
}
console.log(tips, totals)

const calcAverage = arr => {
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));