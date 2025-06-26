const  coding = ['js','python','java', 'cpp']

// coding.forEach( function(val) {   //call back function
//     console.log(val);
    
// }) 

// coding.forEach((item) => {   //call back with arrow funcn
// console.log(item);

// })


// function print(item){
//     console.log(item);
    
// }

// coding.forEach(print)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
    
// } )


const mycode = [
    {
        language: 'javascript',
        extension: 'js'
    },
    {
        language: 'python',
        extension: 'py'
    },
    {
        language: 'html',
        extension: 'html'
    },
]

// arry k andr object ka access/iteration
mycode.forEach( (item)=> {
    console.log(item.language);
    
})