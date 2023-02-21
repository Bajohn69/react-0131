import { useState } from 'react'

import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = () => {
  const [parentData, setParentData] = useState('parent data')

  const [dataFromChildB, setDataFromChildB] = useState('')
  return (
    <>
      <h1>Parent</h1>
      <p>來自 ChildB 的資料: {dataFromChildB}</p>
      <ChildA parentData={parentData} dataFromChildB={dataFromChildB} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default Parent
