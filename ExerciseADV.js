// Number 1#
var Myname = "Kim"
console.log(Myname)

//Number 2#
let age = "20"

//Number 3#
const PI = 3.1416
console.log("PI =", PI)

//Number 4#
let Myage = 20
let isStudent = age < 25
console.log("Age: ",age)
console.log("Is Student? ",isStudent)

//Number 5#
let person = {
    name: {
        first: "Kim",
        last: "Berboso"
    },
    age: 19,
    contact: {
        email: "kimgharleck.berboso@hcdc.edu.ph",
        phone: "123-456-7890"
    },
    isStudent: true
}

console.log(person.name.first)
console.log(person.contact.email)

//Number 6#
let colors = ["red", "black", "blue", "yellow", "red"]

console.log(colors)

//Number 1# Reverse and Transform
let words = ["Mobile", "Legends", "Dota"]
let transformedWords = []

for (let i = 0;i < words.length; i++) {
    let reverseWord = ""

    for (let j = words[i].length - 1;j >=0;j--) {
        reverseWord += words[i][j]
    }
    transformedWords.push(reverseWord.toUpperCase())
}
console.log(transformedWords)

//Number 2# Filtering and Counting
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28]
let filteredNumbers = []
let count = 0

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filteredNumbers.push(num)
        count++
    }
}
console.log(`Found ${count} numbers: [${filteredNumbers.join(", ")}]`);