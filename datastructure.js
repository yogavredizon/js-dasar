// 1. Object

// deklarasi object pada javascript menggunakan {}
const user = {}


// Ini dinamakan properti
let object = {
    name : "yoga",
    age : 19,
    isMarried : "false",
    isSchool : "true",
}

// memanggil object 
console.log('My name is', object.name, "age ", object["age"])
let secObjt = {...object, ...user}
console.log(secObjt)
// 2. Array
const arr = [1, "Yoga", "Informatika", false, object]

// menampilkan array
console.log(arr)

// menampilkan array yang dipilih
console.log(arr[1])

// meampilkan semua array
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// spread Operator
console.log(...arr)

// destructuring object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
//   let firstName = "Dimas";
//   let lastName = "yoga"

// const {firstName, lastName} = profile;

// console.log(firstName, lastName)

// ({ firstName, lastName } = profile);
// console.log(firstName)
// console.log(lastName)

const {firstName : localFisrtName} = profile;
console.log(localFisrtName)

// map adalah koleksi tipe data dengan key value dalam pembuatannya
// deklarasi map literal 
let newMap = new Map(
    [
        ['Name', 'yoga'],
        ['age', 19],
        ['class', 'VC'],
    ]
);

// menambah data pada map
newMap.set('fullName', 'Prayoga Alga Vredizon')
console.log(newMap.get("fullName"))

let checkAge = newMap.has("age")

if (checkAge) {
    console.log("tennager")
}else{
    console.log("Adult")
}

// set adalah struktur data yang nilai didalamnya tidak boleh sama

let num = new Set([
    1,2,3,4,5,6, 1,2
])

console.log(num)