// pembuatan kelas dan constructor pada javascript
// penamaan function harus dibedakan guna membedakan function biasa dengan function constructor

// constructor function hanya dapat dibuat menggunakan regular function
function Home(type, measure, price, stock){
    this.type = type;
    this.measure = measure;
    this.price = price;
    this.stock = stock;
}


// untuk membuat method pada javascript harus menggunakan prototype karena javascript bukan class-based language melainkan prototype-based-language

Home.prototype.isReady = function() {
// keyword this digunakan untuk mengakses variable ataupun method yang terdapat pada class
    if (this.stock == 0 ){
        console.log(`${this.type} with ${this.measure} is Sold Out`)
    }else{
        console.log(`type ${this.type} is Ready with ${this.price} ${this.stock} remaining`)
    }
}

// buat instance dari class
const HomeOne = new Home("21", "12 x 12", 120000000, 3)
HomeOne.isReady()