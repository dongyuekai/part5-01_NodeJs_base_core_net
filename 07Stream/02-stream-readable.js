// stream 之 可读流
const { Readable } = require('stream')

// 自定义类继承 Readable
class MyReadable extends Readable {
  constructor(source) {
    super()
    this.source = source
  }
  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }
}

// 模拟底层数据
let source = ['lg', 'zce', 'syy']
// 实例化
let myReadable = new MyReadable(source)
// myReadable.on('readable', () => {
//   let data = null
//   while ((data = myReadable.read()) !== null) {
//     console.log(data.toString())
//   }
// })
myReadable.on('data', chunk => {
  console.log(chunk.toString())
})