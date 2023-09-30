// membuat objek menggunakan constanta 
// tapi bukan ini cara yang tepat dalam membuat objek dijavascript
const CarOne =  {
    brand : "Toyota",
    name : "Avanza",
    speed : 40,
    type : "Family",

    isRun : () => {
        console.log(`this car is running`)
    },
}

// Car.isRun();
// console.log(Car.brand)

class Car {

    // tanda # digunakan untuk access modifier private
    #chasisNumber;
    brand;

    get Brand(){
        return this._brand
    }

    set Brand(brand){
        this.brand = brand
    }
    
    #generateChasisNumber(){
        this.#chasisNumber =  `${Math.floor(Math.random() * 1000)}`
        return this.#chasisNumber
    }
    showCar(){
        return `${this.brand} with casis ${this.#generateChasisNumber()}`
    }
}

const newCar = new Car()
newCar.brand = "Toyota"
console.log(newCar.showCar())