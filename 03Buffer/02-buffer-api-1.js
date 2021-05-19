// let buf = Buffer.alloc(6)

// fill
// buf.fill('123')
// console.log(buf) // <Buffer 31 32 33 31 32 33>
// console.log(buf.toString()) // 123123

// write
// buf.write('123', 1, 4)
// console.log(buf) // <Buffer 00 31 32 33 00 00>
// console.log(buf.toString()) // 123

// toString
// buf = Buffer.from('拉勾教育')
// console.log(buf) // <Buffer e6 8b 89 e5 8b be e6 95 99 e8 82 b2>
// console.log(buf.toString()) // 拉勾教育
// console.log(buf.toString('utf-8', 3)) // 勾教育
// console.log(buf.toString('utf-8', 3, 9)) // 勾教

// slice
// buf = Buffer.from('拉勾教育')
// let b1 = buf.slice(3, 9) // 一个中文三个字节 顾头不顾尾
// console.log(b1) // <Buffer e5 8b be e6 95 99>
// console.log(b1.toString()) // 勾教

// indexOf
// buf = Buffer.from('ace爱前端,爱拉勾交悦,爱所有')
// console.log(buf)
// console.log(buf.indexOf('爱', 4))

// copy
// let b1 = Buffer.alloc(6)
// let b2 = Buffer.from('拉勾')
// b2.copy(b1)
// console.log(b1.toString()) // 拉勾
// console.log(b2.toString()) // 拉勾
