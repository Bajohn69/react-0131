import { useState } from 'react'

const ChildB = (props) => {
  const [childBData, setChildBData] = useState('child B data')
  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(childBData)
        }}
      >
        Child B 回傳資料給父(& ChildA)
      </button>
    </>
  )
}

export default ChildB
