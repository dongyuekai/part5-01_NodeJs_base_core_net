// 背压机制 pipe方法

let fs = require('fs')
let rs = fs.createReadStream('test.txt', {
  highWaterMark: 4
})
let ws = fs.createWriteStream('test1.txt', {
  highWaterMark: 1
})
let flag = true

// rs.on('data', chunk => {
//   flag = ws.write(chunk, () => {
//     console.log('写完了')
//   })
//   if (!flag) {
//     rs.pause()
//   }
// })
// // 表示又有可用的空间
// ws.on('drain', () => {
//   rs.resume()
// })

rs.pipe(ws)