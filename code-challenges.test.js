// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { test } = require("jest-circus")
const { describe } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.
// decribe("Converts", () => {
//   test("returns The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
// var secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// var secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// var secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"
// expect(Converts(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
// expect(Converts(secretCodeWord2)).toEqual("G0bbl3dyg00k")
// expect(Converts(secretCodeWord3)).toEqual("3cc3ntr1c")

//     })
// })
// made a test function name "Converts"
// my test statement is "returns The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0."
// next i did 3 expect 
// made the test fail

// b) Create the function that makes the test pass.
// function will be Converts into (str) aka string
// thinking of using split becuase i want to remove certain letters in the string 
// then use .delete becuase letters i am removing will be aeiou
// and last one i will use 
// i will use index

// const converts = (str) => {
//    return str.charat().join()

// }









// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.
describe("wordsContainA", () => {
   test("returns all the words that contain the letter a", () => {
var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]
expect(wordsContainA(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
expect(wordsContainA(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])

   }) 
})

// b) Create the function that makes the test pass.

const  wordsContainA = (array, index, letter) => {
    var  arrayOfWords = array.filter(function(word) {
       return word.charAt(index) == letter;
    });
    return arrayOfWords;
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.
