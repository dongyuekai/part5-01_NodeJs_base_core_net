// console.log(__filename) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/01Base/03-node-global.js
// console.log(__dirname) // /Users/dyk/Desktop/demos/LG/part5-01-NodeJS_base_core_net/01Base
// console.log(this) // {}

// console.log(this === global) // false

(function () {
  console.log(this === global) // true
})()