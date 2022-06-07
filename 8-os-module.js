const os = require('os')

//info about current user 
const user = os.userInfo()
console.log(user)

//uptime systems
console.log(os.uptime())


const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentos)