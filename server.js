// const os=require('os')
const path=require('path')

console.log('hello world')
const {add,sub}=require('./math')  // we can destructure the functions in the module
console.log(add(2,3))
console.log(sub(2,3))

// console.log(global)

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname) // for directory names
// console.log(__filename)  // for file names

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))