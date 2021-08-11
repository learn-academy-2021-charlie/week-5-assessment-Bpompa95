// // ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")

// const { test } = require("jest-circus")
// const { describe } = require("yargs")

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
describe("Converts", () => {
  it("returns The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
expect(converts(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
expect(converts(secretCodeWord2)).toEqual("G0bbl3dyg00k")
expect(converts(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
})
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

const converts = (str) => {
    var letters = str.split('')
    for (let i=0; i<letters.length;i++){
        if (letters[i].toLowerCase() === 'a') letters[i] = '4'
        if (letters[i].toLowerCase() === 'e') letters[i] = '3'
        if (letters[i].toLowerCase() === 'i') letters[i] = '1'
        if (letters[i].toLowerCase() === 'o') letters[i] = '0'
     
    }
    return letters.join('')
 
 

}
// since my first logic did not work i had some help in group study and change my original logic to a different one
// so i have an input of a string
// i split the string into an array of letters 
// using this array i interate through to check each letter if they match the same
// because i have to handle uppercase value as well i am calling .toLowerCase on each letter it doesn't matter if it's uppercase or lowercase
// after i change the value we join it to a string 
// and then i return the string 









// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.
describe("wordsContainA", () => {
   test("returns all the words that contain the letter a", () => {
var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]
expect(wordscontaina(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
expect(wordscontaina(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])

   }) 
})
// made a test function name "wordsContainA"
// my test returns all the words that contain the letter a.
// next i did 2 expect 
// made the test fail


// b) Create the function that makes the test pass.

const  wordscontaina = (arr) => {
    var MatchLetterA = arr.filter((word) => {
        return word.toLowerCase().includes("a") 

    });

    return MatchLetterA
      
}
// so i have an input of a array
// filter my array to MatchLetterA 
// return tolowercase and includes with a string of a
// return MatchLetterA
    

    





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
describe("FullHouse", () => {
    test("return whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", () => {
        var hand1 = [5, 5, 5, 3, 3]
       // Expected output: true
       var hand2 = [5, 5, 3, 3, 4]
       // Expected output: false
       var hand3 = [5, 5, 5, 5, 4]
         // Expected output: false
 expect(fullhouse(hand1)).toEqual(true)
 expect(fullhouse(hand2)).toEqual(false)
 expect(fullhouse(hand3)).toEqual(false)
 
    }) 
 })
 // made a test function name "FullHouse"
// my test return whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind
// next i did 3 expect 
// made the test fail
// b) Create the function that makes the test pass.


// when i read the question more then once i thought ok so we have to make this to be true or false 
// so i made a function called full house and my input is hand the reason why i called it hand because it's what we are working with hand 1, 2 and 3
const fullhouse = (hand) => {
    // then i sorted my hand into trueOrfalse 
    let trueOrtfalse = hand.sort((a, b) => a - b)
    // and with my trueOrfalse i made o triple equal to 1 the reason why i use triple equal because triple equals is a strict equality comparison operator i did that 0 though 4
    if (trueOrtfalse[0] === trueOrtfalse[1] && trueOrtfalse[2] === trueOrtfalse[4] ||
        trueOrtfalse[0] === trueOrtfalse[2] && trueOrtfalse[3] === trueOrtfalse[4]) {
            // and return it to true or else return it to false 
            return true
    } else {
        return false
    }
  // THANK GOD FOR STUDY GROUP 
}



