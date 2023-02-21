import React, { useState } from 'react'

const Counter = () => {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>{total}</h1>
      {/* 建議一定要運算出一個 boolean ，不然會出現 0*/}
      {/* {total && <p>msg: 目前 total 不是 0</p>} */}
      {total !== 0 && <p>msg: 目前 total 不是 0</p>}
      <button
        onClick={() => {
          console.log('before', total)

          const newTotal = total + 1 // 先運算出變動後結果值
          setTotal(newTotal) // 此處呼叫要變動狀態的方法
          console.log(newTotal) // 此處想要得到變動後的狀態

          //setTotal(total + 1) // 但實際執行是在 after 以後(setState 異步執行)
          // setState 異步執行
          // 對應策略
          //  1.(推薦 80% 有用) 用變數接住最後更動的值
          // 2.componentDidUpdate 生命週期方法
          // 3.類別型元件用的

          console.log('after', newTotal)
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        - 1
      </button>
    </>
  )
}

export default Counter
