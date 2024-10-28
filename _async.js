function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('A')
      resolve(123) // 실행을 보장(약속)하는 위치!
    }, 1000)
  })
}
function b() {MovieDetails
  console.log('B')
}

// a(() => {
//   b()
// })
// 즉시 실행 함수(IIFE)
;(async () => {
  const res = await a()
  console.log(res)
  b()
})()

// for (let i = 0; i < 10000; i += 1) {
//   console.log(i)
// }
// console.log('END')