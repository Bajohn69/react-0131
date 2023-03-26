import React from 'react'
import ProductItem from './ProductItem'
import { products } from '../../data/products'

const OrderList = (props) => {
  const { count, setCount } = props
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
          // 這樣相當於下面註解中的寫法
          // 注意物件只有屬性名稱都相同才能用解構語法，key 值一定要加
          // key 值選擇: 有 id 優先用 id

          return (
            <ProductItem key={v.id} count={count} setCount={setCount} {...v} />
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
