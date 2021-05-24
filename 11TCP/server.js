// 封包解决粘包
const net = require('net')
const MyTransfrom = require('./MyTransform')

const server = net.createServer()

let overageBuffer = null
let ts = new MyTransfrom()

server.listen('1234', 'localhost')

server.on('listening', () => {
  console.log('服务端运行在 localhost:1234')
})
server.on('connection', socket => {
  socket.on('data', chunk => {

    // 基于封包解决粘包
    if (overageBuffer) {
      chunk = Buffer.concat([overageBuffer, chunk])
    }

    let packageLen = 0
    while (packageLen = ts.getPackageLen(chunk)) {
      const packageCon = chunk.slice(0, packageLen)
      chunk = chunk.slice(packageLen)

      // 拆包
      const ret = ts.decode(packageCon)
      console.log(ret)
      socket.write(ts.encode(ret.body, ret.serialNum))
    }
    overageBuffer = chunk
  })
})