//let score = "33"
//let score = "33abc"
// let score = "null"
// let score = undefined
// let score = "true"
let score = "abc"



console.log(typeof score);

console.log(typeof (score));  //()--> written as a method

 
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
console.log(valueInNumber);


/*
NOTE
"33" --> 33
"33abc" --> NaN
true --> 1 , false --> 0
 */




// let isLoggedIn = 1
// let isLoggedIn = ""
// let isLoggedIn = "abc"


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


/**NOTE */
// 1--> true 
// 0 --> false
// "" --> false
// "abc" --> true

let someNumber = 33

let  stringNumber = String(someNumber)
console.log( typeof stringNumber);
