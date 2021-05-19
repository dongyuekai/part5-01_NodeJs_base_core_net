// 目录操作 API
// access: 判断文件或目录是否具有操作权限
// stat: 获取目录及文件信息
// mkdir: 创建目录
// rmdir: 删除目录
// readdir: 读取目录中的内容
// unlink: 删除指定文件

const fs = require('fs')

// 1 access
// fs.access('a.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('有操作权限')
//   }
// })

// 2 stat
// fs.stat('a.txt', (err, statObj) => {
//   console.log(statObj.size)
//   console.log(statObj.isFile())
//   console.log(statObj.isDirectory())
// })

// 3 mkdir
// fs.mkdir('a/b/c', { recursive: true }, (err) => {
//   if (!err) {
//     console.log('创建成功')
//   } else {
//     console.log('创建失败')
//   }
// })

// 4 rmdir  删除c
// fs.rmdir('a/b/c', err => {
//   if (!err) {
//     console.log('删除成功了')
//   } else {
//     console.log(err)
//   }
// })

// 5 readdir
/* fs.readdir('a/b', (err, files) => {
  console.log(files)
}) */

// 6、unlink
/* fs.unlink('a/a.txt', (err) => {
  if (!err) {
    console.log('删除成功')
  }
}) */


