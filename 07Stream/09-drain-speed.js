// drain 控制写入速度
/**
 * 需求：’拉勾教育‘写入指定文件
 * 01 一次写入
 * 02 分批写入
*/
let fs = require('fs')
let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3
})


// 一次写入
// ws.write('拉勾教育')

// 分批写入 drain控制写入流速度
let source = '拉勾家偶偶'.split('')
let num = 0
let flag = true

function executeWrite() {
  flag = true
  while (num !== 5 && flag) {
    flag = ws.write(source[num])
    num++
  }
}
executeWrite()
ws.on('drain', () => {
  console.log('drain事件执行了---')
  executeWrite()
})


