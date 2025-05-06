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
//console.log(logInUserMessage()); //--->Undefined



function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user ={
    usernam : "jojo",
    price: 199

}

function handleObject(anyObject){
    console.log(`username is ${anyObject.usernam} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    user:'sam',
    price: 399
})

const arr = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//  console.log( returnSecondValue(arr));
 console.log( returnSecondValue([200, 400, 500, 1000]));

 