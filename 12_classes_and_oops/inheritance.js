class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email
        this.password
    }

    addCourse(){
        console.log(`new course added by ${this.username}`);
        
    }
}

const chai = new Teacher('chai', 'chai@tchr.com', '123')

// chai.addCourse()
chai.logMe()
const coffee = new User ('coffee')

coffee.logMe()

console.log(chai instanceof User);



