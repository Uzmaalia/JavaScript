//object based

const User = {
    _email: 'h@hc.com',
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
