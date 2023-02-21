import React from 'react'

const ChildA = (props) => {
  // props.dataFromChildB = 0 // 不可更動 props (props 是唯讀的)
  // https://eddychang.me/blog/what-is-immutability
  return (
    <>
      <h1>ChildA</h1>
      <p>{props.parentData}</p>
      <p>來自 ChildB 的資料: {props.dataFromChildB}</p>
    </>
  )
}

export default ChildA
