// const userEmail = 'hitesh@gmail.com'

const userEmail = []

if (userEmail) {
    console.log("got user email");
    
}
else{
    console.log("dont have user email");
    
}


//falsy value
// false , 0 ,-0 , BigInt 0n ,"", null , undefined , NaN

//truthy
// every value excpt truthy , "0" , 'false' , " " , [] , {} , function{}

if (userEmail.length ===0) {  //to chk if arr is empty or not
    console.log("arr is empty");   
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   //to chk if obj is empty or not
    console.log('obj is empty');
}


//Nullish Coalescing Operator (??) : null undefined ---> used to hndl error / to return values in plc of error
let val1;
// val1 =5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);


//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log('more than 80');


