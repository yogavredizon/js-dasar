class Fan{
    constructor(merk, rpm){
        this.merk = merk
        this.rpm = rpm
    }

    isFast(){
        if (this.rpm > 100){
            console.log(`Type ${this.merk} is fast`)
        }
    }
}

const fanOne = new Fan("GMC", 1000)
fanOne.isFast()
console.log(fanOne)