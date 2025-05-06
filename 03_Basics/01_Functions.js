function sayMyName() {
    console.log('U');
    console.log('Z');
    console.log('M');
    console.log('A');

}

// sayMyName()

// function addTwoNumbers(number1 , number2) {
//     console.log(number1+number2);
    
// }

function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result
    return number1+number2
    
}

// addTwoNumbers(3, "4")
const result = addTwoNumbers(3,5)
// console.log("Result: ",result);


function logInUserMessage(usernam = "sam"){
    // if(usernam === undefined){
    if(!usernam){    
        console.log("Please enter username");
        return
    }
    return `${usernam} just logged in`
}

//  console.log(logInUserMessage("uzma"));
 console.log(logInUserMessage()); //--->Undefined
