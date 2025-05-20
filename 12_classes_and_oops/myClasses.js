// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPssword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
    change
}

const chai = new User('chai', 'chai@fb.com', '123')

console.log(chai.encryptPssword());
console.log(chai.changeUsername);


// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPssword = function(){
    return `${this.password}abc`
}

const tea = new User('tea', 'tea@fb.com', '123')

console.log(tea.encryptPssword());
console.log(tea.changeUsername);

