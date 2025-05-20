class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

const hitesh = new User('hitesh')
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email
    }
}

const iphone = new Teacher('iphone', 'i@phone.com')
// iphone.logMe
// console.log(iphone);
console.log(iphone.createId());




