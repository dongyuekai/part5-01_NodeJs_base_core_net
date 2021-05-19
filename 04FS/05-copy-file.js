// 文件拷贝自定义实现

const fs = require('fs')

/**
 * 01 打开 a 文件 利用 read 将数据保存到 buffer 暂存起来
 * 02 打开 b 文件 利用 write 将 buffer 中 数据 写入 b 文件中
*/
let buf = Buffer.alloc(10)

// 01 打开指定的文件
// fs.open('a.txt', 'r', (err, rfd) => {
//   // 03 打开 b 文件 用于执行数据写入操作
//   fs.open('b.txt', 'w', (err, wfd) => {
//     // 02 从打开的文件中读取数据
//     fs.read(rfd, buf, 0, 10, 0, (err, readBytes) => {
//       // 04 将 buffer 中的数据 写入到 b.txt 文件中
//       fs.write(wfd, buf, 0, 10, 0, (err, written) => {
//         console.log('写入成功')
//       })
//     })
//   })
// })

// 02 数据的完全拷贝
/* fs.open('a.txt', 'r', (err, rfd) => {
  fs.open('b.txt', 'a+', (err, wfd) => {
    fs.read(rfd, buf, 0, 10, 0, (err, readBytes) => {
      fs.write(wfd, buf, 0, 10, 0, (err, written) => {
        fs.read(rfd, buf, 0, 5, 10, (err, readBytes) => {
          fs.write(wfd, buf, 0, 5, 10, (err, written) => {
            console.log('写入成功')
          })
        })
      })
    })
  })
}) */

// 完全数据拷贝 最后实现方式
const BUFFER_SIZE = buf.length
let readOffset = 0

fs.open('a.txt', 'r', (err, rfd) => {
  fs.open('b.txt', 'w', (err, wfd) => {
    function next() {
      fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes) => {
        // readBytes为一个数值 表示当前读取到的个数
        if (!readBytes) {
          // 如果条件成立 说明内容已经读取完毕
          fs.close(rfd, () => { })
          fs.close(wfd, () => { })
          console.log('拷贝完成')
          return
        }
        readOffset += readBytes
        fs.write(wfd, buf, 0, readBytes, (err, written) => {
          next()
        })
      })
    }
    next()
  })
})

