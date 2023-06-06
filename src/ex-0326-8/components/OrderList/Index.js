import React from 'react'
import ProductItem from './ProductItem'
import { products } from '../../data/products'

const OrderList = (props) => {
  const { counts, setCounts } = props
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {products.map((v, i) => {
          /* 
          return (
            <ProductItem key={v.id} {...v} />
            {...v} 這樣相當於下面註解中的寫法
            注意物件只有屬性名稱都相同才能用解構語法，key 值一定要加
            key 值選擇: 有 id 優先用 id

          ) */

          return (
            <ProductItem
              key={v.id}
              count={counts[i]}
              setCount={(newCount) => {
                // 復合的資料類型(陣列)適用三步驟
                // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
                const newCounts = [...counts]

                // 2. 在新的變數值(陣列/物件)上作處理
                // 限制最少買一件
                newCounts[i] = newCount < 1 ? 1 : newCount

                // 3. 設定回原本的狀態中
                setCounts(newCounts)

                // -----------------------------------
                // 也可以用 map 寫，和上面同功能
                // const newCounts = counts.map((v2, i2) =>
                //   i2 === i ? (newCount < 1 ? 1 : newCount) : v2
                // )
                // setCounts(newCounts)

                // -----------------------------------
                // 也可以寫一整句，非常難以閱讀的程式碼
                // setCounts(
                //   counts.map((v2, i2) =>
                //     i2 === i ? (newCount < 1 ? 1 : newCount) : v2
                //   )
                // )
              }}
              {...v}
            />
          )
        })}
        {/* const { id, name, category, image, price } = v
          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              category={category}
              image={image}
              price={price}
            />
          ) */}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
