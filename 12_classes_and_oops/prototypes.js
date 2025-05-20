// let myNmae = 'Hitesh'
// let myChannel = 'chai'
// console.log(myNmae.trueLength);

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor : 'hammer', 
    spiderman : 'sling',

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Object.prototype.heyHitesh = function(){
    console.log(`hitesh says hi`);
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()


// inheritance

const User = {
    name: 'chai',
    email: 'chai@exmpl.com'
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigmnent: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiAurCode       '

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);   
}

anotherUsername.trueLength()
'hitesh'.trueLength()
'iceTea'.trueLength()

















