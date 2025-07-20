//class based syntax

class User {
    constructor (email,password) {
        this.email
        this.password
    }

    get email(){
        return this._email.toUpperCase() //here _ is used to chnage variable name to avoid RACE CONDITION

    }
    set email(value){
        this._email = value.toUpperCase()
        // this._password = value

    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh`

    }
    set password(value){
        // this._password = value.toUpperCase()
        this._password = value

    }
}

const hitesh = new User('hitesh@h.ai', '123')
console.log(hitesh.password);

