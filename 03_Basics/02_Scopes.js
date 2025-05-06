// var c = 300
let a = 300

if(true){
    let a = 10
    let b = 20
    console.log("INNER: ",a);
    
}



console.log(a);


function one() {
    const username = "hitesh"

    function two() {
        const websiite = "youtube"
        console.log(username);
        
    }
    // console.log(websiite);

    two()
    
}

// one()

if(true){
    const usernam = "hitesh"
    if (usernam === "hitesh") {
        const  websiite = " youtube"
        console.log(usernam + websiite);
    }
    // console.log(websiite);
    
}
// console.log(usernam);



//********************INTRESTING****************** */*

function addone(num) {
    return num+1
}
addone(5)

const addtwo = function(num) {
    return num+2
}
addone(5)