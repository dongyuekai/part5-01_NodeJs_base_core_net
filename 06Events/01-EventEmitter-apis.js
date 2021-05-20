const EventEmitter = require('events')

const ev = new EventEmitter()

// on
// ev.on('事件1', () => {
//   console.log('事件1执行了~~2')
// })
// ev.on('事件1', () => {
//   console.log('事件1执行了~~22')
// })
// emit 
// ev.emit('事件1')
// ev.emit('事件1')


// once
// ev.once('事件1', () => {
//   console.log('事件1执行了~~')
// })
// ev.once('事件1', () => {
//   console.log('事件1执行了2~~')
// })
// ev.emit('事件1')
// ev.emit('事件1')

// off
// let cbFn = (a, ...rest) => {
//   console.log('事件1执行了')
//   console.log(a)
//   console.log(rest)
// }
// // ev.on('事件1', cbFn)
// ev.emit('事件1')
// ev.off('事件1', cbFn)
// ev.emit('事件1')

// ev.on('事件1', cbFn)
// ev.emit('事件1', 1, 2, 3)



// fs 内置继承了 EventEmitter
// const fs = require('fs')
// const crt = fs.createReadStream()
// crt.on('data')



