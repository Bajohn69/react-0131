import React, { useState } from 'react'

const BirthSelect = () => {
  const [myYear, setMyYear] = useState('')
  const [myMonth, setMyMonth] = useState('')
  const [myDate, setMyDate] = useState('')

  const createY = () => {
    const year = []
    for (let i = 1950; i < 2011; i++) {
      year.push(<option>{i}</option>)
    }
    return year
  }

  const createM = () => {
    const month = []
    for (let i = 1; i < 13; i++) {
      month.push(<option>{i}</option>)
    }
    return month
  }

  const createD = () => {
    const date = []

    // 幫你算日期數量
    // const days = new Date(2022, 7, 0).getDate() // 31
    const days = new Date(Number(myYear), Number(myMonth), 0).getDate()

    for (let i = 1; i < days + 1; i++) {
      date.push(<option>{i}</option>)
    }
    return date
  }

  return (
    <>
      <label>西元</label>
      <select
        value={myYear}
        onChange={(e) => {
          setMyYear(e.target.value)
        }}
      >
        <option value="">請選擇</option>

        {createY()}
      </select>
      <label>年</label>
      <select
        value={myMonth}
        onChange={(e) => {
          setMyMonth(e.target.value)
        }}
      >
        <option value="">請選擇</option>

        {createM()}
      </select>
      <label>月</label>
      <select
        value={myDate}
        onChange={(e) => {
          setMyDate(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {/* 限制要先有年月才有日 */}
        {myMonth === '' || myYear === '' ? '' : createD()}
      </select>
      <label>日</label>
    </>
  )
}

export default BirthSelect
