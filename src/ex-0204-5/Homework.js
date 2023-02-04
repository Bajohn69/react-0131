import React, { useState } from 'react'
import './menu.css'

const Homework = () => {
  const menuItems = ['首頁', '關於我們', '產品']
  //  解法1
  const [activeMenu, setActiveMenu] = useState('')

  //  解法2
  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <>
      <h1>解法1</h1>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setActiveMenu(v)
              }}
            >
              <a href="#/" className={activeMenu === v ? 'active' : ''}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>

      <h1>解法2</h1>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setActiveIndex(i)
              }}
            >
              <a href="#/" className={activeIndex === i ? 'active' : ''}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Homework
