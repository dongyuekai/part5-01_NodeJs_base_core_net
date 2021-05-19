// node 进程

/**
 * 1 资源 cpu内存
 */

// console.log(process.memoryUsage())

// console.log(process.cpuUsage())

/**
 * 2 运行环境
 */

//  运行目录 
// console.log(process.cwd())

// node版本
// console.log(process.version)

//  cpu架构 
// console.log(process.arch)

// 用户环境
// console.log(process.env.NODE_ENV)
// console.log(process.env.PATH)
// console.log(process.env.HOME)

// 系统平台
// console.log(process.platform)

/**
 *  3 运行状态
*/

// 启动参数
// console.log(process.argv)
// console.log(process.argv0)

// PID 进程号
// console.log(process.pid)

// 运行时间
// console.log(process.uptime())

/**
 * 4 事件
*/
// process.on('exit', code => {
//   console.log('exit ' + code)
// })
// process.on('beforeExit', code => {
//   console.log('before exit ' + code)
// })
// console.log('代码执行完了~~~')

// 执行结果
// 代码执行完了~~~
// before exit 0
// exit 0

/**
 * 5 标准输出 输入 错误
*/

// console.log = function (data) {
//   process.stdout.write('---' + data + '\n')
// }
// console.log(11)
// console.log(22)

// const fs = require('fs')
// fs.createReadStream('./test.txt')
//   .pipe(process.stdout)
// process.stdin.pipe(process.stdout)

process.stdin.setEncoding('utf-8')
process.stdin.on('readable', () => {
  let chunk = process.stdin.read()
  if (chunk !== null) {
    process.stdout.write('data ' + chunk)
  }
})







