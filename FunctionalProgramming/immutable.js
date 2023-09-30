// variable cannot 

const user = {
    firstName : "Harry",
    lastName : "Pottr"
}

// const newUser = (newFirstName, user) => {
//     user.firstName = newFirstName
//     return user
// }

const newUser = (lastName, user) =>{
    return {
        ...user, lastName : lastName
    }
}
// const userOne = newUser()
console.log(newUser("Potter", user))

const hello = () =>{
    return "Hello"
}

const say = (sayHello) => {
    sayHello()
}

console.log(say(hello))