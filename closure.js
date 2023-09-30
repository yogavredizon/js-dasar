// closure adalah sebuah function yang melampirkan sebuah referensi atau variable diluar lingkupnya
// contoh

const greeting = () => {
    const time =  new Date()
    let hour = time.getHours();
    
    function checkHours() {
        if (hour > 6 && hour <= 12) {
            console.log("Good Morning!")
        }else if (hour > 12 && hour <= 18){
            console.log("Good Afternoon!")
        }else{
            console.log("Good Night!")
        }
    }

    return checkHours()
}

greeting()

// contoh lain dari closure
// closure pada javascript bisa dijadikan untuk mengakses variable private karena pada js tidak mempunyai access modifier

const add = () => {
    let counter = 0;

    return () => {
        return ++counter;
    };
}

const counter = add()

console.log(counter())
console.log(counter())
console.log(counter())

function calculate(value) {
    return value < 2 ? value : (value - 1) + (value - 2);
}

console.log(calculate(3));