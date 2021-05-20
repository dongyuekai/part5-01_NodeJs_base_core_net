// 文件可读流和消费
const fs = require('fs')
let rs = fs.createReadStream('test.txt', {
  flags: 'r',
  encoding: null,
  fd: null,
  mode: 438,
  autoClose: true,
  start: 0,
  // end: 3,
  highWaterMark: 4
})
// rs.on('data', chunk => {
//   console.log(chunk.toString())
//   rs.pause() //暂停
//   setTimeout(() => {
//     rs.resume() // 复位
//   }, 1000);
// })

rs.on('readable', () => {
  // let data = rs.read()
  // console.log(data)

  let data
  while ((data = rs.read(1)) !== null) {
    console.log(data.toString())
    console.log('-----', rs._readableState.length)
  }
})


