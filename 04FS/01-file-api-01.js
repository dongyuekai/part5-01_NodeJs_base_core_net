const fs = require('fs')
const path = require('path')

// readFile
// fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
//   console.log('err--', err)
//   console.log('data---', data)
// })

// writeFile 如果data.txt不存在就会执行创建文件操作
// fs.writeFile('data.txt', '123', {
//   mode: 438,
//   flag: 'r+', // r+ 不会覆盖原来内容 w+ 会覆盖原来的内容
//   encoding: 'utf-8'
// }, (err) => {
//   if (!err) {
//     // 写入成功 覆盖操作 会覆盖掉原来的内容
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//       console.log('data---', data)
//     })
//   }
// })

// appendFile  追加方式写入
// fs.appendFile('data.txt', '3lagouJiaoyue', (err) => {
//   console.log('写入成功')
// })

// copyFile 
// fs.copyFile('data.txt', 'text.txt', () => {
//   console.log('拷贝成功')
// })

// watchFile
fs.watchFile('data.txt', { interval: 20 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    //  前后时间有改动 代表文件修改了
    console.log('文件被修改了')
    fs.unwatchFile('data.txt')
  }
})