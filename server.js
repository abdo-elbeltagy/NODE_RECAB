console.log('hello world')
const {add}=require('./math')
console.log(add(2,3))

// console.log(global)

const os=require('os')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())