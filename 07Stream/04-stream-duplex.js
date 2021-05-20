// stream 之 双工流
let { Duplex } = require('stream')
class MyDuplex extends Duplex {
  constructor(source) {
    super()
    this.source = source
  }
  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }
  _write(chunk, en, next) {
    process.stdout.write(chunk)
    process.nextTick(next)
  }
}

let source = ['a', 'b', 'c']
let myDuplex = new MyDuplex(source)

// 可读
// myDuplex.on('data', chunk => {
//   console.log(chunk.toString())
// })

// 可写
myDuplex.write('拉勾交悦', () => {
  console.log(1111)
})

