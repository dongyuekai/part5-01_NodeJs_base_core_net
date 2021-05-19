// 大文件的读写操作

const fs = require('fs')

// read 读操作就是将数据从磁盘中写入buffer中
/**
 * rfd 定位当前被打开的文件
 * buf 用于标识当前缓冲区
 * offset 表示当前从buf的哪个位置开始执行读操作
 * length 表示当前读的长度
 * position 表示当前从文件的那个位置开始读
*/
// let buf = Buffer.alloc(10)
// fs.open('data.txt', 'r', (err, rfd) => {
//   console.log(rfd)
//   // rs.read(rfd,buf,offset,length,position,()=>{})
//   fs.read(rfd, buf, 1, 4, 2, (err, readBytes, data) => {
//     console.log(readBytes) // 4
//     console.log(data)  // <Buffer 00 33 34 35 36 00 00 00 00 00>
//     console.log(data.toString()) // 3456
//   })
// })

// write 将缓存区里的内容写入到磁盘中
/**
 * write(wfd,buf,offset,length,position,()=>{})
 * wfd 定位当前被打开的文件
 * buf 用于标识当前缓存区
 * offset 标识当前从buf的那个位置开始执行写操作
 * length 标识当前写的长度
 * position 标识当前从文件的那个位置开始写 这个值一般为0 否则会产生乱码了
*/
let buf = Buffer.from('1234567890')
fs.open('b.txt', 'w', (err, wfd) => {
  fs.write(wfd, buf, 0, 4, 0, (err, written, buffer) => {
    console.log(written, '----')
    fs.close()
  })
})
