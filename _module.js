// 모듈!

// import ~ from ~
// export ~

// 내보내기 2가지 방식!
// 1. 이름 내보내기(Named Export, 이름 필수!)
export const user = {
  name: 'HEROPY(Named)',
  age: 85
}
export const count = 3

// 2. 기본 내보내기(Default Export, 이름 없어도 됌!)
export default {
  name: 'HEROPY(Default)',
  age: 85
}