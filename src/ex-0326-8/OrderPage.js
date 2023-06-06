import OrderList from './components/OrderList/Index'
import Summary from './components/Summary'
import './OrderPage.css'
import { useState } from 'react'

import { products } from './data/products'

// 初始化狀態用的函式
const initState = (productArray) => {
  const state = []
  for (let i = 0; i < productArray.length; i++) {
    state.push(1)
  }
  return state
}
// TODO: 07-13013-31-47 49分開始

function OrderPage() {
  // props drilling
  // const [count, setCount] = useState(1)

  // 避免多樣商品的狀態一次被改變可以用陣列
  // 記錄每樣商品按照順序被購買的數量
  const [counts, setCounts] = useState(initState(products))

  const calcTotalNumber = () => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
      total += counts[i]
    }
    return total
  }

  // reduce 寫法
  // const calcTotalNumber = () => counts.reduce((a, b) => a + b, 0)

  const calcTotalPrice = () => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
      total += counts[i] * products[i].price
    }
    return total
  }

  // reduce 寫法
  // const calcTotalPrice = () =>
  //   counts.reduce(function (r, a, i) {
  //     return r + a * products[i].price
  //   }, 0)

  return (
    <div className="card">
      <div className="row">
        <OrderList counts={counts} setCounts={setCounts} />
        <Summary
          totalNumber={calcTotalNumber()}
          totalPrice={calcTotalPrice()}
        />
      </div>
    </div>
  )
}

export default OrderPage
