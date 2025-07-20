//object based

const User = {
    _email: 'h@hc.com', //here _ is used to make variable private. New proposal is that we use # instead of _
    _password: 'abc',

    get email(){
        return this._email.toLocaleUpperCase()
    },

    set email(value){
        this._email = value

    }
}


//create - factory function

const tea = Object.create(User)
console.log(tea.email);

//recomendation - use # for private variables
