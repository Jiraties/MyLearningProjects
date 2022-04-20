////////// Primatives

let age: number;
age = 12.1;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

////////// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];


type Person ={
    name: string;
    age: number;
};

let person: Person;
person = {
    name: "Max",
    age: 32
}

// person = {
//     isEmployee: true
// }

let people: Person[];

////////// Type inference

let course: string | number = "React - The Complete Guide";
course = 12341;

////////// Functions & types

function add(a: number, b: number): number | string {
    return a + b;
}

////////// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value ,...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d")

// updatedArray[0].split("");