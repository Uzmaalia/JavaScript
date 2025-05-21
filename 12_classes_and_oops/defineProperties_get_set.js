//slightly old method

function User (email,password) {  
    this.email
    this.password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }

    })

     Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }

    })


}  

const chai = new User('chai2C.com', 'chai')
console.log(chai.email);
