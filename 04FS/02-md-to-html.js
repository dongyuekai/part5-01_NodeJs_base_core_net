const fs = require('fs')
const path = require('path')
const marked = require('marked')
const browserSync = require('browser-sync')

/**
 * 01 读取 md 和 css 内容
 * 02 将上述读取出来的内容替换占位符 生成一个最终需要展现的 Html 字符串
 * 03 将上述 Html 字符写入到指定的 Html 文件中
 * 04 监听 md 文档内容的变更 然后更新 Html 内容 
 * 05 使用 browser-sync 来实时显示 Html 内容
*/

//  执行方式为 node ./02-md-to-html.js index.md  

let mdPath = path.join(__dirname, process.argv[2]) // md文件的绝对路径
let cssPath = path.resolve('github.css')
let htmlPath = mdPath.replace(path.extname(mdPath), '.html')
console.log(mdPath) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/04FS/index.md
console.log(cssPath) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/04FS/github.css
console.log(htmlPath) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/04FS/index.html

fs.watchFile(mdPath, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    fs.readFile(mdPath, 'utf-8', (err, data) => {
      // md -> html
      let htmlStr = marked(data)
      fs.readFile(cssPath, 'utf-8', (_err, _data) => {
        let retHtml = temp.replace('{{content}}', htmlStr).replace('{{style}}', _data)
        // 将上述内容写入到指定的html文件中 用于在浏览器里进行展示
        fs.writeFile(htmlPath, retHtml, err => {
          console.log('html生成成功了···')
        })
      })
    })
  }
})

// 默认在浏览器打开生成的html文件
browserSync.init({
  browser: '',
  server: __dirname,
  watch: true,
  index: path.basename(htmlPath)
})

const temp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style>
            .markdown-body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 1000px;
                margin: 0 auto;
                padding: 45px;
            }
            @media (max-width: 750px) {
                .markdown-body {
                    padding: 15px;
                }
            }
            {{style}}
        </style>
    </head>
    <body>
        <div class="markdown-body">
            {{content}}
        </div>
    </body>
    </html>
`


