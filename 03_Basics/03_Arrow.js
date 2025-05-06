const user= {
    username: "Samantha",
    price: 199,

    WelcomeMessage : function() {
         console.log(`${this.username}, welcome to website`);
         
    }
}

// user.WelcomeMessage()
// user.username='sam'
// user.WelcomeMessage()

// console.log(this);


// function chai() {
//     console.log(this.username); --> undefined
    
// }
// chai()

// const chai  = () => {
//     let username='hitesh'
//     console.log(this.username) --> undefined
// }
// chai()


//***EXPLICIT RETURN**
// const addTwo = (num , num2) => { //if {} is used then return keyword is mandatory
//     return num1 + num2
// }
// console.log(addTwo(3,2));



//****implicit return****
// const addTwo = (num , num2) =>  num1 + num2

// const addTwo = (num , num2) =>  (num1 + num2) // in () return keyword is not used

const addTwo = (num1 , num2) => ({username: "hitesh"})

console.log(addTwo(3,2));



const arr = [2,5,3,7,8]
// arr.forEach(function () {})
// arr.forEach( () => {})

