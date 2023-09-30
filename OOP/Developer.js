// jika terdapat class yang dapat melakukan aksi yang sama dengan class-class sebelumnya maka dapat menggunakan object composition.

class Developer{

    constructor(name){
        this.name = name;
    }

    commitChange(){
        console.log(`${this.name} is commiting changes...`)
    }

}

class FrontEndDeveloper extends Developer{
    buildUi(){
        console.log(`${this.name} is building UI..`)
    }   
}
class BakcEndDeveloper extends Developer{
    buildAPI(){
        console.log(`${this.name} is building API..`)
    }   
}
class DevOpsDeveloper extends Developer{
    deployApp(){
        console.log(`${this.name} is Deploying App..`)
    }   
}

class FullStackDeveloper extends Developer{
    buildUi(){
        console.log(`${this.name} is building UI..`)
    }
    
    buildAPI(){
        console.log(`${this.name} is building API..`)
    }   

    deployApp(){
        console.log(`${this.name} is Deploying App..`)
    }  
}

// jika menggunakan fitur pewarisan maka programmer harus mengulang dalam membuat function, padahal pada FUllStackDeveloper hanya membutuhkan function yang sudah dibuat pada class sebelumnya


// maka pewarisan bukan fitur yang cocok dalam menangani kasus ini
// pada JS ada yang dinamakan object composition, yang menggabungkan semua fungsi dan dapat dijalankan oleh class-class yang dibutuhkan


// Hal yang pertama dalam menerapkan object composition adalah membuat semua fungsi/method yang dibutuhkan class-classnya 

function canBuildUI(Developer){
    return {
        buildUi(){
            console.log(`${this.name} is Building UI...`)
        }
    }
}
function canBuildAPI(Developer){
    return {
        buildAPI(){
            console.log(`${this.name} is Building API...`)
        }
    }
}
function canDeployApp(Developer){
    return {
        deployApp(){
            console.log(`${this.name} is Deploying App...`)
        }
    }
}

// Kemudian buat fungsi sebagai object creator dengan menggunakan built in fungsi Object.assign()

function createFrontEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer))
}
function createBackEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer))
}
function createDevOpsDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer))
}
function createFullStackDeveloper(name){
    const developer = new Developer(name);

    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer),canDeployApp(developer))
}

const fe = createFrontEndDeveloper("Yoga")
fe.commitChange()

const fs = createFullStackDeveloper("Yoga")
fs.commitChange()
fs.buildUi()
fs.buildAPI()
fs.deployApp()