const coding = [ 'js', 'rubby', 'java', 'python' , 'cpp']

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);  // will return undefined


const mynums = [1,2,3,4,5,6,7,8,9,10]

//const newnum = mynums.filter( (num) => num > 4)
// console.log(newnum);

// const newnum = mynums.filter( (num) => {
//     return num>4
// })
// console.log(newnum);

const newnum = []

mynums.forEach( (num) => {
    if (num>4) {
        newnum.push(num)
    }
})
console.log(newnum);


