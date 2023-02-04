import React, { Fragment } from 'react'
// import { data } from './data/student'
// 直接導入 json 檔，會自動轉為js的資料值(等於上面)
import data from './data/student.json'

const MapDemo = () => {
  return (
    <>
      {/* --------------------------------------- */}
      {data.map((v, i) => {
        return (
          /* <>...</> 無法加 key 屬性，要改為 Fragment 才行*/
          /* 沒有 div 的話，這邊一定要用 react fragment */
          <Fragment key={v.id}>
            <h1>{v.name}</h1>
            <p>{v.id}</p>
          </Fragment>
        )
      })}
      {/* --------------------------------------- */}
      <div className="container">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {data.map((v, i) => {
            return (
              <div class="col" key={v.id}>
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{v.name}</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* --------------------------------------- */}

      <h1>Map 展示</h1>
      <table>
        <thead>
          <tr>
            <th>學號</th>
            <th>姓名</th>
            <th>生日</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.birth}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* --------------------------------------- */}

      <ul>
        {/* key 是一定必要的 
        key 的選擇:
      資料有 id 用 id 
      沒 id 可額外使用 uuid 或 nanoid 套件
      只有靜態資料，單純呈現完全不會再變動才能用索引值*/}
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default MapDemo
