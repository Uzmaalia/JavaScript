const myobj = {
    js : 'javaScript' ,
    cpp : 'c++' ,
    rb : 'rubby' ,
    css : 'casciding style sheet'
}

for (const key in myobj) {
    // console.log(myobj[key]);   
}

const program = ['js','rb', 'py' ,'css']

for (const key in program) {
   console.log(program[key]);
   
}

//NOTE :- Map can not be itterated using foi in loop ---> if used no error willl be thrown
//