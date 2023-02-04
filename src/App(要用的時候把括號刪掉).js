import { useState } from 'react'
import './App.css'
import JSXDemo from './ex-0201-1/JSXDemo'
import MapDemo from './ex-0201-2/MapDemo'
import Counter from './ex-0204-3/Counter'
import MapDemo2 from './ex-0204-4/MapDemo'
import Homework from './ex-0204-5/Homework'

function App() {
  // useState(0) => [getter, setter]
  const [total, setTotal] = useState(0)

  const add = (x) => x + 1

  return (
    <>
      <Homework />
      <MapDemo2 />
      <Counter />
      <MapDemo />
      <JSXDemo />
      <h1
        onClick={() => {
          // setTotal(total + 1)
          setTotal(add(total))
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default App
