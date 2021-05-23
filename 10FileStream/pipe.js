const fs = require('fs')
const rs = fs.createReadStream('./1.txt', {
  highWaterMark: 4
})
const ws = fs.createWriteStream('./2.txt', {
  highWaterMark: 1
})
rs.pipe(ws)