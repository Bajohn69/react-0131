import React, { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

function App() {
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <p>呈現資料</p>
      <table border="1">
        {data.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.text}</td>
            </tr>
          )
        })}
      </table>
      <hr />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // ---------------------------------- 背起來 ------------------------------------------
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)

          //1 //2 //3 3步驟合併
          // setData([newObj, ...data])
        }}
      >
        陣列最前面新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        陣列最後面新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          const newData = data.filter((v, i) => {
            return v.text.includes('a')
          })

          // 3. 設定回原本的狀態中
          setData(newData)

          // 優雅的寫法
          // setData(data.filter((v) => v.text.includes('a')))
        }}
      >
        尋找(過濾)只呈現所有文字有a字母的
      </button>
      <br />
      <button
        onClick={() => {
          setData(data.filter((v) => v.text !== 'b'))
        }}
      >
        刪除文字為b的物件
      </button>
      <br />
      <button
        onClick={() => {
          setData(data.filter((v, i) => v.id !== 99))
        }}
      >
        刪除id為99的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 我自己ㄉ
          // const newObj = { id: 5, text: 'bbb' }
          // const newData = [...data]
          // const newDataAfter = newData.slice(2)
          // const newDataBefore = newData.slice(0, 2)
          // const newDataBefore5 = [...newDataBefore, newObj]
          // const AllData = [...newDataBefore5, ...newDataAfter]

          // setData(AllData)
          // console.log(AllData)

          // 建立要插入的物件
          const newObj = { id: 5, text: 'bbb' }
          // 尋找 id = 2 的索引值
          const index = data.findIndex((v, i) => {
            return v.id === 2
          })
          // 如果有找到
          if (index > -1) {
            // 分割為兩子陣列
            const aArray = data.slice(0, index + 1)
            const bArray = data.slice(index + 1)

            // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
            // 2. 在新的變數值(陣列/物件)上作處理
            const newData = [...aArray, newObj, ...bArray]

            // 3. 設定回原本的狀態中
            setData(newData)
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 尋找有沒有 id=3 的資料
          const index = data.findIndex((v, i) => {
            return v.id === 3
          })
          // id=3 的資料 存在
          if (index > -1) {
            // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
            // 第一種深拷貝(只有在陣列只有一層的時候用)
            const newData = data.map((v) => {
              return { ...v }
            })
            // 另一種深拷貝(效率很好 Google 有做最佳化)
            // const newData = JSON.parse(JSON.stringify(data))

            // 2. 在新的變數值(陣列/物件)上作處理
            newData[index].text = 'cccc'
            // 3. 設定回原本的狀態中
            setData(newData)
          }
        }}
      >
        取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          // 我的(錯ㄉ)
          // const index = data.length + 1
          // const newObj = { id: index, text: 'xxx' }
          // const newData = [newObj, ...data]
          // setData(newData)

          // 一個只有 id 的陣列
          const ids = data.map((v) => v.id)
          // 利用這個陣列找出最大值 + 1
          const newId = Math.max(...ids) + 1

          const newObj = { id: newId, text: 'xxx' }

          const newData = [newObj, ...data]
          setData(newData)
        }}
      >
        陣列最前面新增一個物件值id不重覆與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 一個只有 id 的陣列
          const ids = data.map((v) => v.id)
          // 利用這個陣列找出最大值 + 1
          const newId = Math.max(...ids) + 1

          const newObj = { id: newId, text: 'xxx' }

          const newData = [...data, newObj]
          setData(newData)
        }}
      >
        陣列最後面新增一個物件值id不重覆與文字為yyy的物件
      </button>
    </>
  )
}

export default App
