// use backtick to call variable

function hello(name){
    console.log(`Hello, ${name}`)
}

hello("yoga")

// expression function or ussualy call anonymous function
const greeting = function (name){
    console.log(name)
}

greeting("vredizon")


// parameter object
const obj = {
    'name' : 'Yoga',
    'age' : 19
}

const getProfile = function({name, age}){
    console.log(`Name ${name} and Age : ${age}`)
}

getProfile(obj)

// rest parameter pada function
function sum(...nums){
    let res = 0
    for (let num of nums){
        res += num
    }

    return res
}

console.log(sum(1,2,3,4,5))

// arro function
const sayHello = (name) => {
    console.log(`Hai ${name}`)
}
sayHello("Yoga Vredizon")

// ini dimanakan global scope
let score = 100

// jika tidak menggunakan paramater maka () harus tetap ditambahkan
const testSpeed = () => {
    // ini dinamakan local scope
    let speed = 100

    // variable akan dianggap sebagai global jika tidak menggunakan keyword let atau const
    secondSpeed = 70

    // sangat disarankan untuk tidak menggunakan global variable didalam function karena akan menyebabkan collison (tabrakan) antar variable
    
    if (speed > 70) {
        console.log("fast")
    }else{
        console.log("Slow")
    }
}
testSpeed()

// variable tidak dapat diakses karena perbedaan lingkup
// console.log(speed)

// variable secondspeed tetap dapat diakses karena menjadi global variable
console.log(secondSpeed)

// jika hanya satu baris kode maka bisa disingkat menggunakan arrow function
const sayHai = (name) => console.log(`Hai ${name}`)
sayHai("Yoga Vredizon")