const descripter =  Object.getOwnPropertyDescriptor(Math, PI)

console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const tea = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true,

    orderTea: function(){
        console.log('tea is not ready');
        
    }
}

// console.log(tea);
console.log(Object.getOwnPropertyDescriptor(tea,'name'));

Object.definePropertie('tea', 'name',{
    // Writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(tea,'name'));

for(let [key, value] of tea) {

    if(typeof value !== 'function'){

    console.log(`${key} : ${value}`);

    }

} 
