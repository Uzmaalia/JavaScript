// singleton




// object literals

const mySymbol = Symbol("Key1") //symbol

const jsUser = {
    name: "Uzma", //BTS name is also taken as string --> "name"
    "fullname" : "peter  parker",
    [mySymbol]: "mykey1",
    age: 18, 
    location: "Dehradun",
    isLoggedIn: false,
    email: "hajhs@google.com",
    lastLogInDays:["Monday","Saturday"]
}

//accessing an object
// console.log(jsUser.email); //M1 ---> in gnrl use this only
// console.log(jsUser["email"]); //M2
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "siwje@gpt.com"
// Object.freeze(jsUser) //if u dont wnat any chnages --> throw no error

// jsUser.email = "siwje@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


