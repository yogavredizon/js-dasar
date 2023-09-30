let user = new WeakMap()

function countUser(key){
    let length = user.get(key) || 0
    user.set(key, length+1)
}

let jonas = {name : "jonas"}
countUser(jonas)
jonas = null

setTimeout(function (){
    console.log(user);
}, 20000)