// Buffer静态方法

// concat
let b1 = Buffer.from('拉勾')
// let b2 = Buffer.from('交悦')

// let b = Buffer.concat([b1, b2])
// console.log(b)
// console.log(b.toString())

// isBuffer
let b3 = '12'
console.log(Buffer.isBuffer(b1)) // true
console.log(Buffer.isBuffer(b3)) // false