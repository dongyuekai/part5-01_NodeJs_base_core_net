const path = require('path')

console.log(__filename) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/02Path/01-path.js

// 1 获取路径中的基础名称
// console.log(path.basename(__filename)) // 01-path.js
// console.log(path.basename(__filename, '.js')) // 01-path
// console.log(path.basename(__filename, 'css')) // 不匹配 就返回 01-path.js
// console.log(path.basename('/a/b/c')) // c
// console.log(path.basename('/a/b/c/')) // c

// 2 获取路径目录名
// console.log(path.dirname(__filename)) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/02Path
// console.log(path.dirname('/a/b/c')) // /a/b
// console.log(path.dirname('/a/b/c/')) // /a/b

// 3 获取路径的扩展名
// console.log(path.extname(__filename)) // .js
// console.log(path.extname('/a/b/c'))  // 返回空
// console.log(path.extname('a/b/c.html.css.cs')) // .cs
// console.log(path.extname('a/b/c.html.')) // .  

// 4 解析路径
// const obj = path.parse('/a/b/c/index.html')

// {
//   root: '/',
//   dir: '/a/b/c',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// }
// console.log(obj)

// 5 序列化路径
// const obj = path.parse('./a/b/c/')
// console.log(path.format(obj))

// 6 判断当前路径是否式绝对路径
// console.log(path.isAbsolute('foo')) // false
// console.log(path.isAbsolute('/foo')) // true
// console.log(path.isAbsolute('../foo')) // false

// 7 路径拼接
// console.log(path.join('a/b', 'c', 'index.html')) //  a/b/c/index.html
// console.log(path.join('/a/b', 'c', 'index.html')) //  /a/b/c/index.html
// console.log(path.join('a/b', 'c', '../', 'index.html')) //  a/b/index.html
// console.log(path.join('a/b', 'c', './', 'index.html')) //  a/b/c/index.html
// console.log(path.join('')) // .

// 8 规范化路径
// console.log(path.normalize('a/b/c/d')) // a/b/c/d
// console.log(path.normalize('a//b//c/d')) // a/b/c/d
// console.log(path.normalize('a/\b/c/d')) // a/c/d 忽略转义字符

// 9 返回绝对路径
/**
 * resolve([from],to)  返回to的绝对路径
*/
// console.log(path.resolve()) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net
console.log(path.resolve('a', 'b')) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/a/b
console.log(path.resolve('a', '/b')) // /b
console.log(path.resolve('a', '../b')) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/b
console.log(path.resolve('/a', '/b')) // /b
console.log(path.resolve('index.html')) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/index.html







