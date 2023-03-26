// 方法 1
const aa = [{ x: 1 }, 3]
const ab = [...aa]

console.log(aa, ab)
// [ { x: 1 }, 3 ] [ { x: 1 }, 3 ]

const ac = aa.map((v) => {
  if (typeof v === 'object') {
    return { ...v }
  }
  return v
})

console.log(aa, ab, ac)
// [ { x: 1 }, 3 ] [ { x: 1 }, 3 ] [ { x: 1 }, 3 ]

aa[0].x = 999
console.log(aa, ab, ac)
// [ { x: 999 }, 3 ] [ { x: 999 }, 3 ] [ { x: 1 }, 3 ]

// 方法 2 JSON(但會破壞函式或 undefined 變 null)
const ad = JSON.parse(JSON.stringify(aa))
console.log(aa, ab, ad)
// [ { x: 999 }, 3 ] [ { x: 999 }, 3 ] [ { x: 999 }, 3 ]
aa[0].x = 22
console.log(aa, ab, ad)
// [ { x: 22 }, 3 ] [ { x: 22 }, 3 ] [ { x: 999 }, 3 ]

// 新的 API (2022 才出，相容性不高)
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
