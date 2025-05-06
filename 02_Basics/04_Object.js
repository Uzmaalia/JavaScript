// const instaUser = new Object() //singletone object
const instaUser = {} //non-singleton object


instaUser.id = "123abc"
instaUser.name = "vaulter"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: 'samule@gmail.com',
    fullname: {
        userfullnane: {
            firstName: 'Samule',
            lastName: 'Mathuse'

        }
    }
}

// console.log(regularUser.fullname.userfullnane.firstName);

const obj1 = {1: 'a' , 2:'b'}
const obj2 = {3: 'a' , 4:'b'}
const obj4 = {5: 'a' , 6:'b'}


// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1,obj2, obj4)

const obj3 = {...obj1,...obj2} //use this
console.log(obj3);


//when values from databse come
const users = [
    {
        id:1,
        email:'dff@google.com'
    },
    {
        id:2,
        email:'dff@google.com'
    },
    {
        id:3,
        email:'dff@google.com'
    },
]

users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
//less used
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));



//************************DESTRUCTURING OF OBJECT******************* */


const course ={
    courseName: 'js for beginner',
    price: '999',
    courseInstructor: "Henry"
}

// course.courseInstructor

const {courseInstructor: CI} = course
// console.log(courseInstructor);
console.log(CI);

// //abt React
// const navbar = ({company}) => {

// }

// navbar (company = 'ITC')


// API-->JSON--->Object format
// {
//     "name":"hitesh",
//     "coursename": "js in hindi",
//     "price" : "free"

// }

//API--> JSON --> Arrays format
// [
//     {},
//     {},
//     {}
// ]

