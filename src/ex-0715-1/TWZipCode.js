import { useState } from 'react'
import { countries, townships, postcodes } from './data/townships'

const TWZipCode = () => {
  // 範例資料
  //   const countries = ['台北市', '桃園市']
  //   const townships = [
  //     ['中正區', '大同區', '中山區'],
  //     ['中壢區', '平鎮區', '龍潭區'],
  //   ]

  // 代表目前被選中的縣市的索引值
  // 注意資料類型都是數字(索引值是數字)
  // -1代表目前沒有選中任何的陣
  // 小巧思: 通常會設計沒選東西是 -1
  const [countyrIndex, setCountyrIndex] = useState(-1)
  const [townshipIndex, setTownshipIndex] = useState(-1)
  //   2022-07-15 09-03-12 01:17

  return (
    <>
      <h1>台灣縣市區域連動下拉選單</h1>
      <select
        value={countyrIndex}
        onChange={(e) => {
          // 注意 e.target.value 為字串類型
          // 為了保持與 state 的資料類型相同，所以要轉為數字
          setCountyrIndex(Number(e.target.value))

          // 重置 townshipIndex 的值為 -1
          setTownshipIndex(-1)
        }}
      >
        <option value="-1">請選擇縣市</option>
        {countries.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          )
        })}
      </select>
      <select
        value={townshipIndex}
        onChange={(e) => {
          // 注意 e.target.value 為字串類型
          // 為了保持與 state 的資料類型相同，所以要轉為數字
          setTownshipIndex(Number(e.target.value))
        }}
      >
        <option value="-1">請選擇區域</option>
        {/* 當有選擇縣市時才要做 map */}
        {countyrIndex > -1 &&
          townships[countyrIndex].map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            )
          })}
      </select>
      <p>
        郵遞區號:
        {countyrIndex > -1 &&
          townshipIndex > -1 &&
          postcodes[countyrIndex][townshipIndex]}
      </p>
    </>
  )
}

export default TWZipCode
