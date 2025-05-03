const name = "ritik"
const repocount = 50
console.log(name + repocount + "value"); //not recomended indtead use

//backtix -- string interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
 
const gameName = new String('uzma-al')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
 
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString  = gameName.slice(-8,4)
console.log(anotherString) ;

const newString1 = "    uzma    "
console.log(newString1);
console.log(newString1.trim());


const url = "https://abx.com/uusso%20kll"
console.log(url.replace('%20' , '-'))
console.log(url.includes(abx));

console.log(gameName.split('-'));


 
 
 
 