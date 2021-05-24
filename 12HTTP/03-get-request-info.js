// 获取请求信息
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  console.log('请求进来了~~~')

  // 获取请求路径
  const { pathname, query } = url.parse(req.url, true)
  console.log(pathname, '----', query)

  // 获取请求方式
  console.log(req.method)

  // 获取版本号
  console.log(req.httpVersion)

  // 获取请求头
  console.log(req.headers)

  // 获取POST请求体数据
  let arr = []
  req.on('data', data => {
    arr.push(data)
  })
  req.on('end', () => {
    console.log(Buffer.concat(arr).toString())
  })
  
})
server.listen(1234, () => {
  console.log('server is start....')
})