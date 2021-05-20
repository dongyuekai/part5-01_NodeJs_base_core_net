
// H1
// setTimeout(() => {
//   console.log('s1')
//   Promise.resolve().then(() => {
//     console.log('p1')
//   })
//   Promise.resolve().then(() => {
//     console.log('p2')
//   })
//   Promise.resolve().then(() => {
//     console.log('p00')
//   })
// })

// console.log('ss2')

// // p0
// Promise.resolve().then(() => {
//   console.log('p0')
// })
// console.log('ss1')

// // H2
// setTimeout(() => {
//   console.log('s2')
//   Promise.resolve().then(() => {
//     console.log('p3')
//   })
//   Promise.resolve().then(() => {
//     console.log('p4')
//   })
// })


// H1
setTimeout(() => {

  // S1
  console.log('s1')

  // P2
  Promise.resolve().then(() => {
    console.log('p2')
  })

  // P3
  Promise.resolve().then(() => {
    console.log('p3')
  })

})

// W1
Promise.resolve().then(() => {

  // P1
  console.log('p1')

  // S2
  setTimeout(() => {
    console.log('s2')
  })

  // S3
  setTimeout(() => {
    console.log('s3')
  })

})




