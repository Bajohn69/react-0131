import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <>
      <Child
        text="React 你好"
        abc={123}
        isBook={true}
        foo={() => {
          alert('hello')
        }}
      />
      <Child />
      <Child text={999} abc={false} />
    </>
  )
}

export default Parent
