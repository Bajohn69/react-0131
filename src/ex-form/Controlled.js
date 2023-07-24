import React, { useState } from 'react'

const Controlled = () => {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  // radio group
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  const [radioChecked, setRadioChecked] = useState(false)
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
        {/* TODO: 07-14 09-02-22 */}
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
      </section>
    </>
  )
}

export default Controlled
