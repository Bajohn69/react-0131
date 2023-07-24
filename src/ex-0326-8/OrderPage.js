import OrderList from './components/OrderList/Index'
import Summary from './components/Summary'
import './OrderPage.css'
import { useState } from 'react'

import { products } from './data/products'

// 初始化狀態用的函式

// 每個商品的物件
//   {
//   id: 1,
//   name: '咖啡色 T-shirt',
//   category: 'Shirt',
//   image: 'https://i.imgur.com/1GrakTl.jpg',
//   price: 300,
// },
//
// 變為
//
//   {
//   id: 1,
//   name: '咖啡色 T-shirt',
//   category: 'Shirt',
//   image: 'https://i.imgur.com/1GrakTl.jpg',
//   price: 300,
//   count: 1,
// },

const initState = (productArray) => {
  const state = []
  for (let i = 0; i < productArray.length; i++) {
    state.push({ ...productArray[i], count: 1 })
  }

  return state
}

function OrderPage() {
  // props drilling
  // const [count, setCount] = useState(1)

  // 避免多樣商品的狀態一次被改變可以用陣列
  // 記錄每樣商品按照順序被購買的數量
  const [productsInOrder, setProductsInOrder] = useState(initState(products))

  const calcTotalNumber = () => {
    let total = 0
    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count
    }
    return total
  }

  // reduce 寫法
  // const calcTotalNumber = () => counts.reduce((a, b) => a + b, 0)

  const calcTotalPrice = () => {
    let total = 0
    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count * productsInOrder[i].price
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
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary
          totalNumber={calcTotalNumber()}
          totalPrice={calcTotalPrice()}
        />
      </div>
    </div>
  )
}

export default OrderPage
