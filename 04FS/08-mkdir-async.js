// 异步实现目录创建

const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

// 方式1
// function mkDir(dirPath, cb) {
//   let parts = dirPath.split('/')
//   let index = 1
//   function next() {
//     // 表示路径拼接完了
//     if (index > parts.length) {
//       return cb && cb()
//     }
//     let current = parts.slice(0, index++).join('/')

//     fs.access(current, err => {
//       if (err) {
//         // 表示没有操作权限 就创建文件
//         fs.mkdir(current, next)
//       } else {
//         next()
//       }
//     })
//   }
//   next()
// }
// mkDir('a/b/c', () => {
//   console.log('创建成功~~')
// })

// 方式2  将 access 与 mkdir 处理成 async...await 风格
const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)

async function myMkdir(dirPath, cb) {
  let parts = dirPath.split('/')
  for (let index = 1; index <= parts.length; index++) {
    let current = parts.slice(0, index).join('/')
    try {
      await access(current)
    } catch (err) {
      await mkdir(current)
    }
  }
  cb && cb()
}
myMkdir('a/b/c', () => {
  console.log('创建成功')
})
