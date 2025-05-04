//Dates

let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toDateString());

// console.log(typeof date);

// let mydate = new Date(2025, 0 , 5)
// let mydate = new Date(2025, 0 , 23, 5, 3 )
// let mydate = new Date(2025, 0 , 5)
// let mydate = new Date("2023-01-14") // not followed in india
let mydate = new Date("01-14-2025")
// console.log(mydate.toLocaleString());

let timestamp =  Date.now()

// console.log(timestamp);
// console.log(timestamp.getTime()); ///suitable for comparing milisec -- in hotels app typs app

// console.log(Math.floor(Date.now() /1000));  //in sec

let newdate = new Date()
console.log(newdate);
// console.log(newdate.getFullYear());
// console.log(newdate.getDay());

// `${newdate.getDay()} and the time`

newdate.toLocaleString('degault', {
    weekday: "long",
    // timeZone: ''
})


