// 提供restful api服务

import express from 'express'
import { DataSource } from './data'

const app = express()

app.get('/', (req, res) => {
  res.json(DataSource.list)
})
app.listen(8080, () => {
  console.log('server is running...')
})

