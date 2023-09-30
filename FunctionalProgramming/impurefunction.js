// impure function sama seperti pure function hanya saja fungsi ini terdapat tambahan nilai yang diakses dari luar function

let pi = 3.14

function luasLingkaran(jariJari){
    return pi * (jariJari * jariJari)
}

const person = {
    name : "Yoga"
}

function createNewPerson(age, person){
    return {
        ...person, age
    }
}

console.log(person)
console.log(createNewPerson(19, person))
// dikatakan impure function karena variable pi berada diluar function