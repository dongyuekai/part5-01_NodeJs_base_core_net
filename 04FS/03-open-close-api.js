// 文件打开与关闭操作
const fs = require('fs')
const path = require('path')

// open
// fs.open(path.resolve('data.txt'), 'r', (err, fd) => {
//   console.log(fd)
// })

fs.open('data.txt', 'r', (err, fd) => {
  console.log(fd) // 22
  fs.close(fd, err => {
    console.log('关闭成功')
  })
})
