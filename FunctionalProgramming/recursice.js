function factorial(value){
    if (value == 1){
        return 1
    }

    return value * factorial(value - 1)
}

const descOrder = start =>{
    console.log(start)
    if (start > 0){
        descOrder(start - 1)
    }
}
descOrder(10)
console.log(factorial(1))
const hello = () =>{
    return "Hello"
}

const say = (sayHello) => {
    return sayHello()
}

console.log(say(hello))