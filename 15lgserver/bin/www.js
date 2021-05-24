#! /usr/bin/env node

const { program } = require('commander')

// console.log('dyk222')
// program.option('-p --port', 'set server port')

// 配置信息
let options = {
  '-p --port <dir>': {
    'description': 'init server port',
    'example': 'lgserver -p 3306'
  },
  '-d --directory <dir>': {
    'description': 'init server directory',
    'example': '15lgserver -d c:'
  }
}

function formatConfig(configs, cb) {
  Object.entries(configs).forEach(([key, val]) => {
    cb(key, val)
  })
}

formatConfig(options, (cmd, val) => {
  program.option(cmd, val.description)
})

program.on('--help', () => {
  console.log('Examples:')
  formatConfig(options, (cmd, val) => {
    console.log(val.example)
  })
})

program.name('15lgserver')

let version = require('../package.json').version
program.version(version)

let cmdConfig = program.parse(process.argv)
// console.log(cmdConfig)

let Server = require('../main')
new Server(cmdConfig).start()
