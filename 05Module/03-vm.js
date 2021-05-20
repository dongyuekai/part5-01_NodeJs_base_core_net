const fs = require('fs')
const vm = require('vm')

let age = 33
let content = fs.readFileSync('text.txt', 'utf-8')

// eval
// eval(content)
// console.log(age)

// new Function
// console.log(age) // 33
// let fn = new Function('age', 'return age + 1')
// console.log(fn(age)) // 34

// 沙箱环境 与外界是隔离的
vm.runInThisContext(content)
console.log(age)

