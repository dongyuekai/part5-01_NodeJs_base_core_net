const http = require('http')
const url = require('url')
const queryString = require('querystring')

const server = http.createServer((req, res) => {
  // console.log('请求进行来了')
  let { pathname, query } = url.parse(req.url)
  console.log(pathname, '----', query)

  // post
  let arr = []
  req.on('data', (data) => {
    arr.push(data)
  })
  req.on('end', () => {
    let obj = Buffer.concat(arr).toString()
    // console.log(Buffer.concat(arr).toString())
    // console.log(req.headers['content-type'])
    if (req.headers['content-type'] === 'application/json') {
      let a = JSON.parse(obj)
      a.sex = '那么'
      res.end(JSON.stringify(a))
    } else if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
      // console.log('111')
      let ret = queryString.parse(obj)
      res.end(JSON.stringify(ret))
    }
  })
})
server.listen(1234, () => {
  console.log('server is running')
})