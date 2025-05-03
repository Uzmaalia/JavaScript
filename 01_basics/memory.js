// Stack(Primitive) , Heap(Non-Primitive)
  
let myName = "Uzma"

let anothername = myName
anothername = "Aalia"

console.log(myName);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email="uzma@google.com"

console.log(user1.email);
console.log(user2.email);


