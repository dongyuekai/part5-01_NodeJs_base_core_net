// 异步实现目录删除

const fs = require('fs')
const path = require('path')

/**
 * 需求 自定义一个函数 接收一个路径 然后执行删除
 * 01 判断当前传入的路径是否是一个文件 如果是文件 直接删除文件即可
 * 02 如果当前传入的式一个目录 我们需要继续读取目录中的内容 然后再执行删除
 * 03 将删除行为定义为一个函数 递归调用
 * 04 将当前路径名称拼接成可供删除的路径
*/
function myRmdir(dirPath, cb) {
  // 判断当前 dirPath 的类型
  fs.stat(dirPath, (err, statObj) => {
    if (statObj.isDirectory()) {
      // 目录---> 继续读取
      fs.readdir(dirPath, (err, files) => {
        let dirs = files.map(item => {
          return path.join(dirPath, item)
        })
        let index = 0
        function next() {
          if (index == dirs.length) return fs.rmdir(dirPath, cb)

          let current = dirs[index++]

          myRmdir(current, next)
        }

        next()
      })
    } else {
      // 文件---> 直接删除
      fs.unlink(dirPath, cb)
    }
  })
}
myRmdir('aa', () => {
  console.log('删除成功了~~')
})