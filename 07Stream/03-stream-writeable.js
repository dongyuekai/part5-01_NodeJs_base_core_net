// stream 之 模拟 可写流

const { Writable } = require('stream')

// 自定义类继承 Writable
class MyWriteable extends Writable {
  constructor() {
    super()
  }
  // 重写_read方法
  _write(chunk, en, done) {
    process.stdout.write(chunk.toString() + '<----')
    process.nextTick(done)
  }
}

let myWriteable = new MyWriteable()
myWriteable.write('lagou', 'utf-8', () => {
  console.log('写完了~~~')
})