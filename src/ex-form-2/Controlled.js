import React, { useState } from 'react'

const Controlled = () => {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  // radio group
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  const [radioChecked, setRadioChecked] = useState(false)

  // select
  const [car, setCar] = useState('')
  const carOptions = ['BMW', 'Toyota', 'Benz']

  // checkbox - single
  const [agree, setAgree] = useState(false)

  // checkbox - grooup
  const [likelist, setLikelist] = useState([])
  const fruitOptions = ['西瓜', '芒果', '香蕉']

  return (
    <>
      <section id="input-text">
        <h1>文字輸入框(input-text)</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <h2>{inputText}</h2>
      </section>
      <section id="textarea">
        <h1>文字輸入區域(textarea)</h1>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
        <h2>{textArea}</h2>
      </section>
      {/* <section id="radio">
        <h1>單選按鈕(input-radio)</h1>
        <input
          type="radio"
          checked={radioChecked}
          onChange={(e) => {
            setRadioChecked(e.target.checked)
          }}
        />
        <h2>{radioChecked}</h2>
      </section> */}
      <section id="radio-group">
        <h1>選項按鈕-群組(radio-group)</h1>
        {genderOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                checked={gender === v}
                value={v}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="select">
        <h1>下拉清單(select)</h1>
        <select
          value={car}
          onChange={(e) => {
            setCar(e.target.value)
          }}
        >
          {/* 請選擇 value 要留空 */}
          <option value="">請選擇</option>
          {carOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        {/* value 是只有 react 才有的寫法 一般 html 要寫在 option > selected */}
        {/* <select value="芒果">
          <option value="請選擇">請選擇</option>
          <option value="芒果">芒果</option>
          <option value="西瓜">西瓜</option>
        </select> */}
      </section>
      <section id="checkbox-single">
        <h1>核取方塊(單一)</h1>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.value)
          }}
        />
        <label>我同意條款</label>
      </section>
      <section id="checkbox-grooup">
        <h1>核取方塊(群組)</h1>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                checked={likelist.includes(v)}
                value={v}
                onChange={(e) => {
                  // 先判斷是否有在狀態陣列中
                  // if 有 -> 移出陣列
                  if (likelist.includes(e.target.value)) {
                    // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
                    // 2. 在新的變數值(陣列/物件)上作處理
                    const newLikeList = likelist.filter((v) => {
                      return v !== e.target.value
                    })
                    // 3. 設定回原本的狀態中
                    setLikelist(newLikeList)
                  } else {
                    // else -> 加入陣列
                    const newLikeList = [...likelist, e.target.value]
                    setLikelist(newLikeList)
                  }
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
        {/* <input
          type="checkbox"
          checked={likelist.includes('芒果')}
          value="芒果"
          onChange={(e) => {
            // 先判斷是否有在狀態陣列中
            // if 有 -> 移出陣列
            if (likelist.includes(e.target.value)) {
              // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
              // 2. 在新的變數值(陣列/物件)上作處理
              const newLikeList = likelist.filter((v) => {
                return v !== e.target.value
              })
              // 3. 設定回原本的狀態中
              setLikelist(newLikeList)
            } else {
              // else -> 加入陣列
              const newLikeList = [...likelist, e.target.value]
              setLikelist(newLikeList)
            }
          }}
        />
        <label>芒果</label> */}
        {/* <input type="checkbox" checked={likelist.includes('芒果')} />
        <label>芒果</label>
        <input type="checkbox" checked={likelist.includes('西瓜')} />
        <label>西瓜</label> */}
      </section>
      {/* =========================== DRY ===========================  */}
      {/* <input
          type="radio"
          checked={gender === '男'}
          value="男"
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>男</label>

        <input
          type="radio"
          checked={gender === '女'}
          value="女"
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>女</label>

        <input
          type="radio"
          checked={gender === '不提供'}
          value="不提供"
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>不提供</label> */}
    </>
  )
}

export default Controlled
