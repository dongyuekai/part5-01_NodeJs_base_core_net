on myRmdir(dirPath, cb) {
//   // 判断当前 dirPath 的类型
//   fs.stat(path.resolve(dirPath), (err, statObj) => {
//     if (statObj.isDirectory()) {
//       // 目录---> 继续读取
//       fs.readdir(dirPath, (err, files) => {
//         let dirs = files.map(item => {
//           return path.join(dirPath, item)
//         })
//         let index = 0
//         function next() {
//           if (index == dirs.length) return fs.rmdir(dirPath, cb)

//           let current = dirs[index++]

//           myRmdir(current, next)
//         }

//         next()
//       })
//     } else {
//       // 文件---> 直接删除
//       fs.unlink(dirPath, cb)
//     }
//   })
// }

// myRmdir('temp', () => {
//   console.log('删除成功了')
// })