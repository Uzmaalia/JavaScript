//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is printing");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}

let arr  = ["flash" , "batman" , 'seperman']
//console.log(arr.length);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element); 
}


//beak and continue


// for (let index = 0; index < array.length; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of 1 is ${index}`);
    
    
// }


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of 1 is ${index}`);
    
    
}

 