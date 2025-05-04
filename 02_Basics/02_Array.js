const marevelHero = ["Ironman","BlackWidow","thor"]
const dcHeros = ["WonderWoman" , "StarFire" , "Flash"]

// marevelHero.push(dcHeros)
// console.log(marevelHero);
// console.log(marevelHero[3][1]);

// const allHero = marevelHero.concat(dcHeros)
// console.log(allHero);

const allNewHeros = [...marevelHero, ...dcHeros] //more prefrd
// console.log(allNewHeros);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr2 = arr1.flat(Infinity)
console.log(arr2);


console.log(Array.isArray("CAT"));
console.log(Array.from("CAT"));
console.log(Array.from({name: "cat"})); //intresting

let score1 = 100
let score2 = 200
let score3 = 300

 console.log(Array.of(score1,score2,score3));
 