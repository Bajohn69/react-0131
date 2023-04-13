import OrderList from './components/OrderList/Index'
import Summary from './components/Summary'
import './OrderPage.css'
import { useState } from 'react'

import { products } from './data/products'

function OrderPage() {
  // props drilling
  // const [count, setCount] = useState(1)

  // 避免多樣商品的狀態一次被改變可以用陣列
  // 記錄每樣商品按照順序被購買的數量
  const [counts, setCounts] = useState([1, 1])

  const calcTotalNumber = () => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
      total += counts[i]
    }
    return total
  }

  const calcTotalPrice = () => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
      total += counts[i] * products[i].price
    }
    return total
  }

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
