//for of loop

const arr = [1,2,3,4,5]


for (const num of arr) {
    // console.log(num); 
}

const greeting = 'Hello World!'
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);   
}


//Maps ---> accpt no duplicate value

const map = new Map()
map.set('IN' , 'India')
map.set('USA' , 'United States of America')
map.set('FR' , 'France')
map.set('IN' , 'India') // ---> will not be printed again andwill not throw any error

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

//actual syntax
for (const [key , value] of map) {    // [key , value] ---> destructure of array
    console.log(key , ':-' , value);
    
}

//Note :- arrays are not itteratable like this

