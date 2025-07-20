function SetUseename(username){
    //complex DB calls
    this.username = username
    console.log('called');
    
}

function createUser(username,email,password){
    setUsername.call(this, username) //call--->current execution contest kisi aur function ko pass kr dey rha h
    this.email
    this.password 
}

const chai = new createUser('chai', 'chai@google.com', '123')
console.log(chai);

