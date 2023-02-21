import React from 'react'
import PropTypes from 'prop-types'

const Child = (props) => {
  console.log(props) // {text: 'React 你好'}
  const { text, abc, isBook, foo } = props //先做物件解構賦值再使用

  // 解構指定值時也可以給預設值
  // 或直接在傳入參數解構時給定預設值
  // 參考: https://stackoverflow.com/questions/47774695/react-functional-component-default-props-vs-default-parameters
  // const { text = '沒給文字', abc, isBook, foo } = props
  return (
    <>
      <h1>{text}</h1>
      <h1>{abc}</h1>
      <h1>{isBook}</h1>
      <button onClick={foo}>click me</button>
      {/* <h1>{props.text}</h1> */}
    </>
  )
}

// propTypes 只是警告
Child.propTypes = {
  text: PropTypes.string.isRequired, // 會跟 default 衝到，畫蛇添足
  abc: PropTypes.number.isRequired,
}

// 預設值(寫元件給別人時才會用到)
Child.defaultProps = {
  text: '沒給文字',
  abc: '0',
}

export default Child
